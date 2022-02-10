import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  //navigate to another page
  const navigate = useNavigate();
  //grab the url in order for it to be used in javascript
  const API = process.env.REACT_APP_API_URL;
  //use the tool params, to grab the id that will be listed in the url
  const { id } = useParams();
  //will render as an object even if the useState is an array
  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${API}/songs/${id}`).then(
      () => {
        navigate(`/songs`);
      },
      (error) => console.error(error)
    );
  };

  return (
    <div>
      <article className="SongInformation">
        <p>Name:{song.name}</p>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Favorite: {song.is_favorite}</p>
      </article>
      <Link to={`/songs/${song.id}/edit`}>
        <button>Update</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/songs/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
export default SongDetails;
