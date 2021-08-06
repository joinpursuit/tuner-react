import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SongDetails = () => {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let history = useHistory()

  const deleteSong = async () => {
      try {
          await axios.delete(`${API}/songs/${id}`)
          const deletedState = [...song]
          console.log(deletedState)
          deletedState.splice(id, 1)
          setSong(deletedState)
      } catch (err) {
          console.log(err)
      }
  }

  const handleDelete = async () => {
      await deleteSong(id)
      history.push(`/songs`)
  }

  useEffect(() => {
    const fetchSong = async () => {
      try {
        let res;
        res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSong();
  }, [id]);

  return (
    <div>
      <h3>
        {song.is_favorite ? <span>❤️</span> : null} {song.name}
      </h3>

      <p>{song.name}</p>

      <p>{song.artist}</p>

      <p>{song.album}</p>

      <p>{song.time}</p>
      <Link to={`/songs`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
     <Link to={`/songs/${id}/edit`}><button>Edit</button></Link> 
    </div>
  );
};

export default SongDetails;
