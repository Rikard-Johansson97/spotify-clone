import React, { FC } from "react";
import { Box, Stack, IconButton, Typography, Slider } from "@mui/material";
import { SkipNext, SkipPrevious, PlayArrow } from "@mui/icons-material";

interface PlayerControllerProps {
  progress: any;
  is_paused: any;
  duration: any;
  player: any;
}

const PlayerController: FC<PlayerControllerProps> = ({
  progress,
  is_paused,
  duration,
  player,
}) => {
  return (
    <Stack
      spacing={0}
      justifyContent='center'
      alignItems={"center"}
      sx={{ width: "100%" }}>
      <Stack
        direction='row'
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}>
        <IconButton
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.previousTrack();
          }}>
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.togglePlay();
          }}>
          <PlayArrow sx={{ width: 38, height: 38 }} />
        </IconButton>
        <IconButton
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.nextTrack();
          }}>
          <SkipNext sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Stack>
      <Stack
        direction='row'
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{ width: "75%" }}>
        <Typography
          variant='body1'
          sx={{ color: "text.secondary", fontSize: 12 }}>
          1:23
        </Typography>
        <Slider size='medium' />
        <Typography
          variant='body1'
          sx={{ color: "text.secondary", fontSize: 12 }}>
          3:23
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerController;
