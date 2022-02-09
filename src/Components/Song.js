import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>{song.album}</td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
      <td>
        <Link to={`songs/${song.id}`}>{song.name}</Link>
      </td>
    </tr>
  );
}

export default Song;
