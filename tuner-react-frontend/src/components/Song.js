import { Link } from "react-router-dom";

function Song(props) {
  const { id, name, artist, album, time, is_favorite } = props.data;
  return (
    <tr className="Song Songs">
      <td>
        <Link to={`/songs/${id}`}>{name} </Link>
      </td>
      <td>{artist}</td>
      <td>{time}</td>
      <td>{is_favorite ? "⭐️" : ""}</td>
    </tr>
  );
}

export default Song;
