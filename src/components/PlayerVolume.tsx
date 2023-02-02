import React, { useState } from "react";
import { Grid, Stack, Slider } from "@mui/material";
import { VolumeDown, VolumeUp, VolumeOff } from "@mui/icons-material";

export default function PlayerVolume({ player }: any) {
  const [volume, setVolume] = useState(50);

  return (
    <Grid
      item
      xs={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
      <Stack
        spacing={2}
        alignItems='center'
        direction='row'
        sx={{ width: 150, color: "text.secondary" }}>
        {volume === 0 ? (
          <VolumeOff />
        ) : volume <= 50 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}
        <Slider
          min={0}
          max={100}
          value={volume}
          onChange={(_, v) => setVolume(v as number)}
          onChangeCommitted={(_, v) => {
            player.setVolume((v as number) / 100);
          }}
          step={1}
        />
      </Stack>
    </Grid>
  );
}
