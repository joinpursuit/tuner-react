import React from 'react';
import { Link } from 'react-router-dom';

const Song = ({ song: { name, artist, time, is_favorite, id } }) => {
  return (
    <tr className="Song">
      <td>
        <Link to={`/songs/${id}`}>{name}</Link>
      </td>
      <td>{artist}</td>
      <td>{time}</td>
      <td>{is_favorite ? <span>⭐️</span> : null}</td>
    </tr>
  );
};

export default Song;
