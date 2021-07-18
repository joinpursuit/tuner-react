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

  // const handleEdit = () => {

  // }

  return (
    <article className="SongDetails">
      <h2>Song Deets</h2>
      <p>Name: {song.name}</p> <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p> <p>Time: {song.time}</p>
      <p>
        Favorite:{" "}
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </p>
      <button className="DeleteButton" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/songs/${song.id}/edit`}>
        <button className="EditButton">Edit</button>
      </Link>
      <Link to={`/songs`}>
        <button className="GoBackButton">Go Back</button>
      </Link>
    </article>
  );
};

export default SongDetails;
