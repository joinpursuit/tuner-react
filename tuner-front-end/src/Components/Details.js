import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function Details() {
  const [song, setSong] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (error) {
      return error;
    }
  };

  const goBack = () => {
    history.push("/songs");
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const result = await axios.get(`${API}/songs/${id}`);
        setSong(result.data);
      } catch (error) {
        return error;
      }
    };
    fetchSong();
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    goBack();
  };

  return (
    <section className="Details">
      <p className="Song-Details">
        <span>
          <b>Name:</b> {song.name}
        </span>
        <span>
          <b>Artist:</b> {song.artist}
        </span>
        <span>
          <b>Album:</b> {song.album}
        </span>
        <span>
          <b>Time:</b> {song.time}
        </span>
        <span>
          <b>Favorite:</b> {song.is_favorite ? "⭐" : "No"}
        </span>
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>
      <Link to={`/songs/${song.id}/edit`}>
        <button>Edit</button>
      </Link>
    </section>
  );
}

export default withRouter(Details);
