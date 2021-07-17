import { Link } from "react-router-dom";

const SongListItem = ({ song }) => {
  return (
    <table>
    <thead>
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>
          {song.name} {song.artist} {song.album} {song.time}
        </Link>
      </td>
    </tr>
    </thead>
    </table>
  );
};

export default SongListItem;
