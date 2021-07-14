import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
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
    const getSong = async () => {
      try {
        const result = await axios.get(`${API}/songs/${id}`);
        setSong(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSong();
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    history.push("/songs");
  };

  const {name, artist, album, time} = song;
  return (
    <article>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{time}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default withRouter(SongDetails);
