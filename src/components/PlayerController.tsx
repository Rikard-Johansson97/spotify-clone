import React, { FC, useEffect, useState } from "react";
import { Box, Stack, IconButton, Typography, Slider } from "@mui/material";
import { SkipNext, SkipPrevious, PlayArrow, Pause } from "@mui/icons-material";
import { formatTime } from "../utils/formatTime";

interface PlayerControllerProps {
  is_paused: boolean;
  progress: string | null | any;
  duration: string | null | any;
  player: any;
}

const PlayerController: FC<PlayerControllerProps> = ({
  player,
  is_paused,
  duration,
  progress,
}) => {
  const [currentProgress, setCurrentProgress] = useState(progress / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!is_paused && player) {
        setCurrentProgress((c) => c + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [is_paused, player]);

  useEffect(() => {
    setCurrentProgress(progress / 1000);
  }, [progress]);

  return (
    <Stack
      spacing={0}
      justifyContent='center'
      alignItems='center'
      sx={{ width: "100%" }}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={1}>
        <IconButton
          size='small'
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.previousTrack();
          }}>
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton
          size='small'
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.togglePlay();
          }}>
          {is_paused ? (
            <PlayArrow sx={{ width: 38, height: 38 }} />
          ) : (
            <Pause sx={{ width: 38, height: 38 }} />
          )}
        </IconButton>
        <IconButton
          size='small'
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.nextTrack();
          }}>
          <SkipNext sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Stack>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ width: "75%" }}>
        <Typography
          variant='body1'
          sx={{ color: "text.secondary", fontSize: 12 }}>
          {formatTime(currentProgress * 1000)}
        </Typography>
        <Slider
          size='medium'
          min={0}
          value={currentProgress}
          max={duration / 1000}
          onChange={(_, v) => {
            setCurrentProgress(v as number);
          }}
          onChangeCommitted={(_, v) => {
            player.seek((v as number) * 1000);
          }}
        />
        <Typography
          variant='body1'
          sx={{ color: "text.secondary", fontSize: 12 }}>
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerController;
