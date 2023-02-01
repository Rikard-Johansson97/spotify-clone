import { AccessTimeRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { Items, Songs } from "../types/song";
import SongRow from "./SongRow";

interface SongTableProps {
  songs: Items | undefined;
  isLoading: boolean;
}

const SongTable: FC<SongTableProps> = ({ isLoading, songs }) => {
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
      {isLoading
        ? Array(20)
            .fill()
            .map((_, index) => (
              <SongRow key={index} isLoading={isLoading} index={index} />
            ))
        : songs?.map((song: Items, index: number) => (
            <SongRow
              key={index}
              isLoading={isLoading}
              index={index}
              song={song.track}
            />
          ))}
    </Box>
  );
};

export default SongTable;
