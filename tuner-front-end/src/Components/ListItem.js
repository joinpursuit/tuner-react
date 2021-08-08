import { Link } from "react-router-dom";

function ListItem({ song }) {
  return (
    <tr>
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.artist}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.time}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.is_favorite ? "⭐" : null}</Link>
      </td>
    </tr>
  );
}

export default ListItem;
