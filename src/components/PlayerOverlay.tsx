import {
  Box,
  Grid,
  Container,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import React, { FC } from "react";
import PlayerController from "./PlayerController";
import { CurrentTrack } from "../types/Player";

interface PlayerOverlayProps {
  playerOverlayIsOpen: boolean;
  closeOverlay: any;
  song: CurrentTrack;
  is_paused: boolean;
  progress: string | null;
  duration: string | null;
  player: any;
}

const PlayerOverlay: FC<PlayerOverlayProps> = ({
  playerOverlayIsOpen,
  closeOverlay,
  song,
  is_paused,
  progress,
  duration,
  player,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "fixed",
        height: "100vh",
        transform: playerOverlayIsOpen
          ? "translateY(0px)"
          : "translateY(100vh)",
        transition: "300ms",
        top: 0,
        left: 0,
        width: "100%",
        display: { xs: "block", md: "none" },
      }}>
      <Container
        sx={{
          height: "100%",
          background: "linear-gradient(#121212, #f0790050)",
        }}>
        <Grid
          container
          direction='column'
          justifyContent={"space-between"}
          sx={{ height: "100%" }}>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}>
            <IconButton onClick={closeOverlay}>
              <KeyboardArrowDown
                fontSize='large'
                sx={{ color: "text.primary" }}
              />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url(${song?.album.images[0]?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
            }}></Grid>
          <Grid item xs={1}>
            <Typography
              variant='body1'
              sx={{
                color: "text.primary",
                fontSize: 28,
                width: "100%",
              }}>
              {song?.name}
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: "text.primary", fontSize: 28 }}>
              {song?.artists[0].name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <PlayerController
              progress={progress}
              is_paused={is_paused}
              duration={duration}
              player={player}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlayerOverlay;
