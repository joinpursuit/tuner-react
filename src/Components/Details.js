import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const navigate = useNavigate();
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(URL + "/songs/" + id)
      .then((response) => setSong(response.data))
      .catch(() => {
        navigate("/not-found");
        //see notes >> talk to sal, ask?
      });
  }, [URL, id, navigate]);

  const deleteSong = () => {
    axios
      .delete(`${URL}/songs/${id}`)
      .then(() => navigate("/songs"))
      .catch((e) => console.error(e));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <article className="container p-5 my-5 bg-warning text-dark rounded">
      <div className="container">
        <h1 className="text-white mb-3">{song.name}</h1>
        <h4 className="row">
          <span className="fw-bold">By</span>
          <span className="small">{song.artist}</span>
        </h4>
        <h4 className="row">
          <span className="fw-bold">Album</span>
          <span className="small">{song.album}</span>
        </h4>
        <hr></hr>
        <div className="row mb-2">
          <span className="col fw-bold">Length</span>
          <span className="col fw-bold">Favorites</span>
        </div>
        <p className="row mb-4">
          <span className="col p-2 text-white">{song.time}</span>
          <span className="col p-2 text-white">
            {song.is_favorite ? ":heart:" : ":white_heart:"}
          </span>
        </p>
        <hr className=""></hr>
      </div>
      <div
        className="showNavigation btn-group mt-2 gap-3 container justify-content-between"
        style={{ overflowX: "scroll" }} //vanessa --- see your notes re details overflowx bootstrap feature mui?
      >
        <div>
          {" "}
          <Link to={`/songs`}>
            <button className="btn btn-success">Back</button>
          </Link>
        </div>
        <div> </div>
        <div>
          {" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Details;
