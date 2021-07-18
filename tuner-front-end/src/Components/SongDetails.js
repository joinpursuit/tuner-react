import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { toast } from "react-toastify";

const API = apiURL();

function SongDetails({ history, match }) {
  const [song, setSong] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(response => {
        setSong(response.data);
      })
      .catch((e) => {
        console.error(e);
        history.push("/NotFound");
      });
  }, [history, id]);

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line
      const response = await axios.delete(`${API}/songs/${id}`);
      history.push("/songs");
    } catch (e) {
      console.error(e);
      toast.error("Could not delete song");
    }
  };

  return (
    <article>
      <h3>{song.name}</h3>
      <h3>{song.artist}</h3>
      <h3>{song.album}</h3>
      <h3>{song.time}</h3>
      <h3>{song.is_favorite}</h3>
      <Link to="/songs">
        <button>Back</button>
      </Link>
      <Link to={`/songs/${song.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default withRouter(SongDetails);
