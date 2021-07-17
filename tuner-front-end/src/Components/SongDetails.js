import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { getSong } from "../../../../tuner-api/queries/songs";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const SongDetails = () => {
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

  useEffect(() => {
    const getSongDeets = async () => {
      try {
        const result = await axios.get(`${API}/songs/${id}`);
        setSong(result.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    getSongDeets();
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    history.push("/songs");
  };

  return (
    <article>
      <p>
        {song.name} {song.artist}
      </p>
      <p>
        {song.album} {song.time}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default SongDetails;
