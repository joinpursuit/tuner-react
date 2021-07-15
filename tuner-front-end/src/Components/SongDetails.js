import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import apiURL from "../util/apiURL";

const API = apiURL();

const SongDetails = (props) => {
  const [song, setSong] = useState([]);
  const { id } = props.match.params;

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);
      } catch (error) {}
    };
    fetchSong();
  }, [id]);

  const handleDelete = async () => {
      await deleteSong();
      props.history.push("/songs")
  };


  return (
    <div>
      <article>
      <div className="budgetCard">
        <p>Name: {song.name}</p>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Time: {song.time}</p>
      </div>
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
        <button onClick={handleDelete}>Delete</button>
        </div>
      </article>
    </div>
  );
};

export default withRouter(SongDetails);
