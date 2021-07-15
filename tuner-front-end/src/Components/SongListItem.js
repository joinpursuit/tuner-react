import { Link } from "react-router-dom";

function SongListItem({ song }) {
  console.log(song);
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
        <p>
          {song.name}
        </p>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
      <td>
        <Link to={`/songs/${song.id}`}>
          <img
            className="songIcon"
            src="https://static.thenounproject.com/png/55431-200.png"
          ></img>
        </Link>
      </td>
    </tr>
  );
}

export default SongListItem;
