import { Link } from "react-router-dom";

const SongListItem = ({ song }) => {
  const { id, is_favorite, name } = song;
  return (
    <tr>
      <td>
        {is_favorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td><Link to={`/songs/${id}`}>{name}</Link></td>
      <td>
        <Link to={`/songs/${id}/edit`}>✏️</Link>
      </td>
    </tr>
  );
};

export default SongListItem;
