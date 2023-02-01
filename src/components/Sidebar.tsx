import { Box, Divider } from "@mui/material";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeRounded } from "@mui/icons-material";
import SidebarPlaylistItem from "./SidebarPlaylistItem";
import { useSelector } from "react-redux";
import { Playlists } from "../types/playlist";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { albumList }: any = useSelector<Playlists>((state) => state.playlist);

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
        {albumList?.map((album: any) => (
          <SidebarPlaylistItem key={album.id} id={album.id} name={album.name} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
