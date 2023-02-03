import { Box, Divider } from "@mui/material";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeRounded, List } from "@mui/icons-material";
import SidebarPlaylistItem from "./SidebarPlaylistItem";
import { useSelector } from "react-redux";
import { AlbumList, PlaylistType, State } from "../types/playlist";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { albumList }: any = useSelector<State>((state) => {
    return state.playlist;
  });

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: 230,
        height: "100%",
        flexDirection: "column",
        display: { xs: "none", md: "flex" },
      }}>
      <Link to='/' style={{ textDecoration: "none" }}>
        <Box
          px={3}
          py={1}
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
          }}>
          <HomeRounded sx={{ fontSize: 28, marginRight: 1 }} /> Home
        </Box>
      </Link>
      <Link to='/library' style={{ textDecoration: "none" }}>
        <Box
          px={3}
          py={1}
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
          }}>
          <List sx={{ fontSize: 28, marginRight: 1 }} /> bibliotek
        </Box>
      </Link>

      <Box px={3} py={1}>
        <Divider />
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {albumList.map((album: AlbumList) => (
          <SidebarPlaylistItem key={album.id} id={album.id} name={album.name} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
