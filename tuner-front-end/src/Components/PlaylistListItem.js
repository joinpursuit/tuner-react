import { Link } from "react-router-dom";

function PlaylistListItem({ playlist }) {
  return (
    <tr>
      <td>
        <a href={playlist.url} target="_blank" rel="noreferrer">
          {playlist.name}
        </a>
      </td>
      <td>
        <Link to={`/playlists/${playlist.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default PlaylistListItem;

