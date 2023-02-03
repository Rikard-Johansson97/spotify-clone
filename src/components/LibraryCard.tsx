import { BorderAll } from "@mui/icons-material";
import { Avatar, Grid, Typography, Card } from "@mui/material";
import React, { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AlbumList } from "../types/playlist";

interface LibraryCardProps {
  album: AlbumList;
}

const LibraryCard: FC<LibraryCardProps> = ({ album }) => {
  const navigate = useNavigate();

  return (
    <Grid
      sx={{ cursor: "pointer" }}
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      onClick={() => navigate(`/playlist/${album.id}`)}>
      <Card
        sx={{
          borderRadius: 2,
          bgcolor: "#222",
          padding: 3,
        }}>
        <Avatar
          variant='square'
          src={album.images[0].url}
          sx={{
            width: "100%",
            height: "100%",
            aspectRatio: "1/1",
            marginBottom: 2,
          }}
        />
        <Typography sx={{ color: "text.primary", fontSize: 18 }}>
          {album?.name}
        </Typography>
        <Typography
          noWrap
          sx={{
            color: "text.primary",
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}>
          {album?.description}
        </Typography>
      </Card>
    </Grid>
  );
};

export default LibraryCard;
