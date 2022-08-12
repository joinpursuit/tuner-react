import "./Song.css";
import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td className="favorite">{song.is_favorite ? "★" : ""}</td>
      <td className="title">
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
