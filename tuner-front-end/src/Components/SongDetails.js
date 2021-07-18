import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);
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
    <article className="SongDetails">
      <h2>Song Deets</h2>
      <p>Name: {song.name}</p> <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p> <p>Time: {song.time}</p>
      <p>Favorite: {song.is_favorite ? (
          <span>&#11088;</span>
        ) : (
          <span className="X">&#10060;</span>
        )}</p>
      <button className="DeleteButton" onClick={handleDelete}>Delete</button>
      <Link to={`/songs/${song.id}/edit`}><button className="EditButton">Edit</button></Link>
      <Link to={`/songs`}><button className="GoBackButton">Go Back</button></Link>
    </article>
  );
};

export default SongDetails;
