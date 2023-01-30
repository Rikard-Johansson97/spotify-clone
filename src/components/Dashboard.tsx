import React, { FC } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "./Sidebar";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
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
          <Route path='/playlist/:id' element={<div>playlist</div>} />
        </Routes>
      </Box>
      {/* Playern går här */}
    </Box>
  );
};

export default Dashboard;
