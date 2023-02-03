import React, { FC, useEffect, useState } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import PlayerController from "./PlayerController";
import PlayerVolume from "./PlayerVolume";
import { getAccessTokenFromStorage } from "../utils/getAccessTokenFromStorage";
import PlayerOverlay from "./PlayerOverlay";
import { PlaylistType } from "../types/playlist";
import { CurrentTrack, PlayerTypes } from "../types/Player";

interface PlayerProps {
  spotifyApi?: {
    _credentials: {
      clientId: string;
      clientSecret: string;
      redirectUri: string;
    };
    getPlaylist: any;
    play: any;
    transferMyPlayback: any;
    getMyDevices: any;
  };
}

interface WindowWithSpotifyWebPlaybackSDKReady extends Window {
  onSpotifyWebPlaybackSDKReady: () => any;
  Spotify: any;
}

declare var window: WindowWithSpotifyWebPlaybackSDKReady;

const Player: FC<PlayerProps> = ({ spotifyApi }) => {
  const [localPlayer, setPlayer] = useState<PlayerTypes | null>(null);
  const [is_paused, setPaused] = useState(false);
  const [current_track, setTrack] = useState<CurrentTrack | null>(null);
  const [device, setDevice] = useState(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [playerOverlayIsOpen, setPlayerOverlayIsOpen] = useState(false);

  console.log(JSON.stringify(spotifyApi));

  useEffect(() => {
    const token = getAccessTokenFromStorage();
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Spotify Clone by RIKARD",
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }: any) => {
        setDevice(device_id);
        setPlayer(player);
      });

      player.addListener("player_state_changed", (state: any) => {
        if (!state || !state.track_window?.current_track) {
          return;
        }
        const duration_ms = state.track_window.current_track.duration_ms;
        const position_ms = state.position;
        setDuration(duration_ms);
        setProgress(position_ms);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
      });

      setPlayer(player);
      player.connect();
    };
  }, []);

  useEffect(() => {
    if (!localPlayer) return;
    localPlayer.connect();
    return () => {
      localPlayer.disconnect();
    };
  }, [localPlayer]);

  useEffect(() => {
    const transferMyPlayback = async () => {
      if (device) {
        await spotifyApi?.transferMyPlayback([device], true);
      }
    };
    const getDeviceFromApi = async () => {
      await spotifyApi?.getMyDevices();
    };
    getDeviceFromApi();
    transferMyPlayback();
  }, [device, spotifyApi]);

  if (!localPlayer || !current_track) return null;

  return (
    <Box>
      <Grid
        container
        px={3}
        onClick={() => {
          setPlayerOverlayIsOpen((c) => !c);
        }}
        sx={{
          height: 100,
          width: "100%",
          borderTop: "1px solid #292929",
          bgcolor: "background.paper",
        }}>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={current_track.album.images[0]?.url}
            variant='square'
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary", fontSize: 14 }}>
              {current_track?.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {current_track?.artists[0].name}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <PlayerController
            progress={progress}
            is_paused={is_paused}
            duration={duration}
            player={localPlayer}
          />
        </Grid>
        <PlayerVolume player={localPlayer} />
      </Grid>
      <PlayerOverlay
        playerOverlayIsOpen={playerOverlayIsOpen}
        closeOverlay={() => setPlayerOverlayIsOpen(false)}
        song={current_track}
        is_paused={is_paused}
        progress={progress}
        duration={duration}
        player={localPlayer}
      />
    </Box>
  );
};

export default Player;
