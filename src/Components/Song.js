import React from 'react';
import { Link } from 'react-router-dom';

const Song = ({ song: { name, artist, album, is_favorite, id } }) => {
  return (
    <tr className="Song">
      <td>
        <Link to={`/songs/${id}`}>{name}</Link>
      </td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>{is_favorite ? <span>&#x1F496;</span> : null}</td>
    </tr>
  );
};

export default Song;
