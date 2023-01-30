import React, { FC } from "react";
import { Box, Button } from "@mui/material";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5",
      }}>
      <Button size='large' variant='contained'>
        Hej Spotify
      </Button>
    </Box>
  );
};

export default Home;
