import { Link } from "react-router-dom";

import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Avatar from '@mui/material/Avatar';
import Artist from "../assets/ArtistAvatar.png"; 
import Album from "../assets/ArtistAlbum.png"; 


const Format = ({ song }) => {
  return (
      <Link to={`/songs/${song.id}`}>
      <ImageListItem >
        <img
          src={Album}
          srcSet={Album}
          alt={song.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={song.name}
          subtitle={<><span>{song.artist}</span><Avatar alt="Artist Avatar" src={Artist} /><div className="mt-2 text-light">{song.time}</div></>} 
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${song.name}`}
            >
              {song.is_favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          }
        />
      </ImageListItem>
      </Link>
  );
}


export default Format;
