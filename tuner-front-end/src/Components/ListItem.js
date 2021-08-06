import { Link } from "react-router-dom";

function ListItem({ song }) {
  return (
    <tr>
      <td>
        <a href={song.url} rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default ListItem;

