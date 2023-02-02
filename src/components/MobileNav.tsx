import React, { FC } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, List } from "@mui/icons-material";

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <BottomNavigation sx={{ bgcolor: "background.paper" }} showLabels>
        <BottomNavigationAction
          label='home'
          icon={<Home />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label='Ditt Bibliotek'
          icon={<List />}
          onClick={() => navigate("/library")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
