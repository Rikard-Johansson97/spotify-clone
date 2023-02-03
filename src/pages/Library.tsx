import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LibraryCard from "../components/LibraryCard";
import { AlbumList, State } from "../types/playlist";
import { useSelector } from "react-redux";
interface LibraryProps {}

const Library: FC<LibraryProps> = ({}) => {
  const { albumList }: any = useSelector<State>((state) => {
    return state.playlist;
  });
  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}>
      <Typography
        sx={{ color: "text.primary", fontSize: 30, fontWeight: "bold" }}>
        Ditt Bibliotek
      </Typography>
      <Grid container spacing={2}>
        {albumList.map((album: AlbumList, i: number) => (
          <LibraryCard key={i} album={album} />
        ))}
      </Grid>
    </Box>
  );
};

export default Library;
