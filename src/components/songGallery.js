import { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './song';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SongGallery() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
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
  }, [id, API]);

  return (
    <div className='songsGallery'>
      <section>
        <div className='songsEntries'>Song Entries:</div>

        <table>
          <tbody>
            {song.map((song, id) => {
              return <Song key={song.id} song={song} index={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default SongGallery;
