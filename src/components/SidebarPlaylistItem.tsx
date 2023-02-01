import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Playlists } from "../types/playlist";

interface SidebarPlaylistItemProps {
  name: string;
  id: string;
}

const SidebarPlaylistItem: FC<SidebarPlaylistItemProps> = ({ name, id }) => {
  return (
    <Link to={`/playlist/${id}`} style={{ textDecoration: "none" }}>
      <Box
        px={3}
        py={1}
        sx={{ color: "text.secondary", cursor: "pointer", fontSize: 14 }}>
        {name}
      </Box>
    </Link>
  );
};

export default SidebarPlaylistItem;
