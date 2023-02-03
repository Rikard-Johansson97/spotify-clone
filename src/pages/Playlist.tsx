import { Avatar, Box, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongTable from "../components/SongTable";
import { PlaylistType } from "../types/playlist";
import { Song, Songs } from "../types/song";

interface PlaylistProps {
  spotifyApi: any;
}

const Playlist: FC<PlaylistProps> = ({ spotifyApi }) => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<PlaylistType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPlaylist() {
      setIsLoading(true);
      const playlistInfo = await spotifyApi.getPlaylist(id);

      setPlaylist(playlistInfo.body);
      setIsLoading(false);
    }
    getPlaylist();
  }, [id]);

  return (
    <Box sx={{ bgcolor: "background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          display: "flex",
          background: "linear-gradient(#f0790070, #121212)",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          boxSizing: "border-box",
        }}>
        <Avatar
          variant='square'
          src={playlist?.images[0]?.url}
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
              color: "text.primary",
            }}>
            Playlist
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}>
            {playlist?.name}
          </Typography>
        </Box>
      </Box>

      <SongTable
        songs={playlist?.tracks.items.map((song, i) => ({
          ...song,
          track: {
            ...song.track,
            context_uri: `spotify:playlist:${id}`,
            position: i,
            offset: { position: i },
          },
        }))}
        isLoading={isLoading}
        spotifyApi={spotifyApi}
      />
    </Box>
  );
};

export default Playlist;
