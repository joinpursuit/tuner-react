import { Link } from "react-router-dom";

export default function SongListItem({ song }) {
  return (
    <div>
      <tr>
        <td>
          {song.is_favorite ? (
            <span>⭐️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
        <td>
          <Link to={`/songs/${song.id}`}> {song.name} {song.artist} {song.time} ✏️</Link>
        </td>
      </tr>
    </div>
  );
}
