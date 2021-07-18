import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function SongDetails() {
  const [song, setSong] = useState([]);
  
  let history = useHistory();
  const { id } = useParams();

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      setSong(result.data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    history.push("/songs");
  };

  return (
    <div>
      <h1>Song</h1>
      {song.name}
      {song.artist}
      {song.album}
      {song.time}
      <button>
        <Link path to="/songs">
          Back
        </Link>
      </button>
      <button>
        <Link path to={`/songs/${id}/edit`}>
          Edit
        </Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
