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
  }, [API, id]);

  return (
    <div className='songsGallery'>
      <section>
        <div className='songsEntries'>Song Entries:</div>

        <table>
          <tbody>
            {song.map((so, id) => {
              return <Song key={so.id} song={so} index={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default SongGallery;
