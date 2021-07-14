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
      <p>{song.is_favorite}</p>
      <p>{song.name}</p>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <button onClick={handleGoBack}>Back</button>
      <button onClick={handleDelete}>Delete</button>

    </article>
  );
}

export default withRouter(SongDetails);
