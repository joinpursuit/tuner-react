import React from "react";
import { Link } from "react-router-dom"

function SongListItem({ song }) {
  return (
    <tr>
      {/* <h1>SongListItem</h1> */}
      <td>{song.id}</td>
      <td>
        <Link to={`/songs/show/${song.id}`}>
          <a href={song.name} target="_blank" rel="noreferrer">
            {song.name}
          </a>
        </Link>
      </td>
      <td>{song.album}</td>
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
