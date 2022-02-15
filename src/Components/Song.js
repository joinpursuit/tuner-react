import { Link } from "react-router-dom";

function Song({ song }) {
  // console.log(song);
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>{song.name}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td></td>
      <td>
        <Link 
        style={{ color: "#66A3A3" }}
        to={`/songs/${song.id}`}>{song.name}</Link>
        <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
      </td>
      
      <td>
        {song.artist ? (
          <span>${song.artist}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {song.album ? (
          <span>${song.album}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {song.time ? (
          <span>${song.time}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    </tr>
  );
}

export default Song;


