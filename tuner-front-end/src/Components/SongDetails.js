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
  
  const fetchSong = async () => {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      console.log(result)
      setSong(result.data.payload);
    } catch (err) {
      console.log(err);
    }
}

const goBack = ()=>{
    history.push('/songs');
}



  useEffect(() => {
 fetchSong()
  }, [id]);
  
  const handleDelete = async () => {
    await deleteSong();
  goBack();
  };

  return (
    <article>
      <p>{song.name}</p>
      <p>{song.album}</p>
      <p>{song.artist}</p>
      <p>{song.time}</p>
      <p>{song.is_favorite}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>

    </article>
  );
}

export default withRouter(SongDetails);