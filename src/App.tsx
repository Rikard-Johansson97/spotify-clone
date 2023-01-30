import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { getAccessToken } from "./utils/getAccessToken";
import { getAccessTokenFromStorage } from "./utils/getAccessTokenFromStorage";

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
    <Box className='App'>
      {token ? (
        <Dashboard />
      ) : (
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      )}
    </Box>
  );
}

export default App;
