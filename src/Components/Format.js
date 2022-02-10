import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ShareIcon from '@mui/icons-material/Share';

import Artist from "../assets/ArtistAvatar.png"; 
import Album from "../assets/ArtistAlbum.png"; 


import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

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
          avatar={ <Avatar alt="Artist Avatar" src={Artist} />}
          subtitle={<><span>{song.artist}</span>{" "}<div className="mt-2 text-light">{song.time}</div></>} 
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




// const Format = ({ song }) => {

//   return (
//     <Link to={`/songs/${song.id}`}>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar alt="Artist Avatar" src={Artist} />
//         }
//         action={
//           <IconButton aria-label="settings">
//           </IconButton>
//         }
//         title={song.name}
//         subheader={song.artist}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={Album}
//         alt="Artist Album"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {song.time}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//         {song.is_favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />} 
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </Link>
//   );
// }





// const Format = ({ song }) => {

//   return (
//       <tr className="song rounded mb-3">
//           <td className="row">
//             <Link className="bg-success list-group-item list-group-item-action" to={`/songs/${song.id}`}>
//               <span 
//                 className="col-1 float-start p-2 text-nowrap text-white mt-1" 
//                 style={{overflowX: "scroll"}}>
//                   {song.is_favorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
//               </span>
//               <span 
//                 className="col-5 bg-outline-secondary text-white text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
//                 style={{overflowX: "scroll"}}>
//                   {song.name}
//               </span> 
//               <span 
//                 className="col-2 bg-outline-secondary text-white text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
//                 style={{overflowX: "scroll"}}>
//                   {song.artist}
//               </span>
//               <span
//                 className="col-auto bg-outline-secondary text-white text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
//                 style={{overflowX: "scroll"}}>
//                   {song.time}
//               </span>
//             </Link>
//           </td>
//       </tr>
//   );
// }

export default Format;
