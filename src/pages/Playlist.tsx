import { Avatar, Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface PlaylistProps {}

const Playlist: FC<PlaylistProps> = ({}) => {
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
        }}>
        <Avatar
          src='https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg'
          variant='square'
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold", color: "text.primary" }}>
          Playlist
        </Typography>
      </Box>
    </Box>
  );
};

export default Playlist;
