import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "./Sidebar";
import Playlist from "../pages/Playlist";
import { getAccessTokenFromStorage } from "../utils/getAccessTokenFromStorage";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../store/playlistSlice";
import { redirectURL } from "../config";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.VITE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    redirectUri: redirectURL,
  });

  console.log(spotifyApi);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getAccessTokenFromStorage();

    if (accessToken) {
      async function onMount() {
        await spotifyApi.setAccessToken(accessToken);
        dispatch(getPlaylist(spotifyApi));
      }
      onMount();
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/library' element={<div>library</div>} />
          <Route
            path='/playlist/:id'
            element={<Playlist spotifyApi={spotifyApi} />}
          />
        </Routes>
      </Box>
      <Player />
    </Box>
  );
};

export default Dashboard;
