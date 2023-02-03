import React, { FC } from "react";
import { Box, Avatar, Typography, Grid, Skeleton } from "@mui/material";
import { Song } from "../types/song";
import { formatTime } from "../utils/formatTime";
import { PlaylistType } from "../types/playlist";

interface SongRowProps {
  index?: number | undefined;
  song?: Song;
  isLoading?: boolean;
  spotifyApi?: PlaylistType;
}

const SongRow: FC<SongRowProps> = ({ index, song, isLoading, spotifyApi }) => {
  async function handleClick() {
    console.log(song);
    await spotifyApi?.play(song);
  }
  return (
    <Grid
      onClick={handleClick}
      container
      px={2}
      py={1}
      sx={{
        color: "text.secondary",
        fontSize: 14,
        cursor: "pointer",
        "&:hover": { bgcolor: "#f0790030" },
      }}>
      <Grid
        item
        sx={{
          width: 35,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
        }}>
        {index && index + 1}
      </Grid>
      <Grid
        item
        sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
        {isLoading ? (
          <Skeleton variant='rectangular' width={40} height={40} />
        ) : (
          <Avatar variant='square' src={song?.album.images[0]?.url} />
        )}
        <Box sx={{ ml: 1 }}>
          <Typography sx={{ fontSize: 16, color: "text.primary" }}>
            {isLoading ? (
              <Skeleton variant='text' width={130} height={24} />
            ) : (
              song?.name
            )}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {isLoading ? (
              <Skeleton variant='text' width={50} height={18} />
            ) : (
              song?.artists[0].name
            )}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}>
        {isLoading ? (
          <Skeleton variant='text' width={50} height={18} />
        ) : (
          song?.album.name
        )}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        {isLoading ? (
          <Skeleton variant='text' width={50} height={18} />
        ) : (
          formatTime(song?.duration_ms as number)
        )}
      </Grid>
    </Grid>
  );
};

export default SongRow;
