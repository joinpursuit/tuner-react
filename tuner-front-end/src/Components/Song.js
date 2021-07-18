import { Link } from "react-router-dom";

function Song({ song }) {
  const songURL = `/songs/${song.id}`;
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={songURL}>
          {song.name}
        </Link>
      </td>
      <td>
        <Link to={songURL}>
          {song.artist}
        </Link>
      </td>
      <td>
        <Link to={songURL}>
          {song.time}
        </Link>
      </td>
    </tr>
  );
}

export default Song;
