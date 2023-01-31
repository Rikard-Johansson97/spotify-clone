import { AccessTimeRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import SongRow from "./SongRow";

interface SongTableProps {}

const SongTable: FC<SongTableProps> = ({}) => {
  return (
    <Box p={{ xs: 3, md: 4 }}>
      <Grid
        container
        px={2}
        py={1}
        sx={{ width: "100%", color: "text.secondary", fontSize: 14 }}>
        <Grid item sx={{ width: 35 }}>
          #
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          Title
        </Grid>
        <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
          Album
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <AccessTimeRounded sx={{ width: "20", height: "20" }} />
        </Grid>
      </Grid>
      {Array(50)
        .fill(0)
        .map(() => (
          <SongRow />
        ))}
    </Box>
  );
};

export default SongTable;
