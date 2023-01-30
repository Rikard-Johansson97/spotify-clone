import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { accessUrl } from "../config";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "Background.paper",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Button href={accessUrl} size='large' variant='contained'>
        Login
      </Button>
    </Box>
  );
};

export default Login;
