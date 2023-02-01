import { Avatar, Box, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongTable from "../components/SongTable";
import { Song, Songs } from "../types/song";

interface PlaylistProps {
  spotifyApi: any;
}

const Playlist: FC<PlaylistProps> = ({ spotifyApi }) => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<Songs | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlaylist = async () => {
      const playlistInfo = await spotifyApi.getPlaylist(id);

      setPlaylist(playlistInfo.body);
    };
    getPlaylist();
    setIsLoading(false);
  }, [id]);

  console.log(JSON.stringify(playlist?.tracks.items));

  return (
    <Box sx={{ bgcolor: "background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          background: "linear-gradient(#f0790070, #121212)",
        }}>
        <Avatar
          src={playlist?.images[0]?.url}
          variant='square'
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
            {Playlist?.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}>
            {Playlist?.name}
          </Typography>
        </Box>
      </Box>
      <SongTable songs={playlist?.tracks.items} isLoading={isLoading} />
    </Box>
  );
};

export default Playlist;
