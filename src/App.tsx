import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import { getAccessToken } from "./utils/getAccessToken";
import { getAccessTokenFromStorage } from "./utils/getAccessTokenFromStorage";
import { useSelector } from "react-redux";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let accessToken = getAccessTokenFromStorage() || getAccessToken();

    if (accessToken) {
      sessionStorage.setItem("spotifyToken", accessToken);
      setToken(accessToken);
      window.location.hash = "";
    }
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      {token ? (
        <Dashboard />
      ) : (
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
