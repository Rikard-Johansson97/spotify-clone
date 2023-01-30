import { Box, Divider } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { HomeRounded } from "@mui/icons-material";
import SidebarPlaylistItem from "./SidebarPlaylistItem";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: 230,
        height: "100%",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
      }}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Box
          px={3}
          py={1}
          sx={{
            fontWeight: "bold",
            fontSize: 14,
            color: "text.primary",
            display: "flex",
            alignItems: "center",
          }}>
          <HomeRounded sx={{ fontSize: "28", marginRight: 1 }} />
          Home
        </Box>
      </Link>
      <Box px={3} py={1}>
        <Divider />
      </Box>
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
      </Box>
    </Box>
  );
};

export default Sidebar;
