import { Link } from "react-router-dom";

const SongListItem = ({ song }) => {
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
        <Link to={`/songs/${song.id}`}>🎵 {song.name} </Link>
      </td>
      <td>
        <p>{song.time}</p>
      </td>
    </tr>
  );
}

export default SongListItem;
