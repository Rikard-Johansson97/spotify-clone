import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface SidebarPlaylistItemProps {}

const SidebarPlaylistItem: FC<SidebarPlaylistItemProps> = ({}) => {
  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <Box
        px={3}
        py={1}
        sx={{ color: "text.secondary", cursor: "pointer", fontSize: 14 }}>
        JUSTIN Bieber
      </Box>
    </Link>
  );
};

export default SidebarPlaylistItem;
