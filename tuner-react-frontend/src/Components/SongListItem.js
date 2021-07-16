import React from "react";
import { Link } from "react-router-dom"

function SongListItem({ song }) {
  return (
    <tr>
      {/* <h1>SongListItem</h1> */}
      <th scope="row">{song.id}</th>
      <td>
        <Link to={`/songs/show/${song.id}`}>
          
            {song.name}
           
        </Link>
      </td >
      <td>{song.album}</td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    </tr>
  );
}

export default SongListItem;
