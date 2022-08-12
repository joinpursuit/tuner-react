import { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './song';

const API = process.env.REACT_APP_API_URL;

function SongGallery() {
  const [songsEntries, setSong] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs/`)
      .then((response) => {
        console.log(response.data);

        setSong(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className='songsGallery'>
      <section>
        <div className='songsEntries'>Song Entries:</div>

        <table>
          <tbody>
            {songsEntries.map((song, id) => {
              return <Song key={song.id} songs={song} index={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default SongGallery;
