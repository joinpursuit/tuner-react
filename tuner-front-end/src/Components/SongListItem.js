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
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>🎵</Link>
      </td>
    </tr>
  );
}

export default SongListItem;