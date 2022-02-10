import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Song from './Song';


const SongTable = () => {
  const [songs, setSongs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getSongs = async () => {
      const allSongs = await axios.get(`${URL}/songs`);
      setSongs(allSongs.data);
    };
    getSongs();
  }, [URL]);

  const tableRows = songs.map((e, i) => <Song song={e} key={'song' + i} />);
  return (
    <div className="SongTable">
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <td>Name</td>
            <td>Artist</td>
            <td>Time</td>
            <td>Favorite</td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default SongTable;