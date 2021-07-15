import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function SongDetails() {
  const [song, setSong] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (err) {
      console.log(err)
    }
  }

  const handleGoBack = () =>{
    history.push('/songs')
  }

  useEffect(() => {
    const fetchSong = async ()=> {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      setSong(result.data.payload);
    } catch (err) {
      console.log(err);
    }
  } 
  fetchSong();
  }, [id]);
  
  const handleDelete = async () => {
    await deleteSong();
    history.push('/songs');
  };

  return (
    <article>
      <span>{song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}</span>
      <span>  &nbsp;  {song.name}</span>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Time: {song.time}</p>
      <button onClick={handleGoBack}>Back</button>
      <button onClick={handleDelete}>Delete</button>

    </article>
  );
}

export default withRouter(SongDetails);
