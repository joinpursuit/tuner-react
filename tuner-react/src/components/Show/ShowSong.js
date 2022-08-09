import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./ShowSong.scss";

const ShowSong = (songID) => {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const { id } = useParams();

  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        navigate("/songs-error");
      });
  }, []); // eslint-disable-line

  const deleteSong = () => {
    axios.delete(`${API}/songs/${id}`).then(() => {
      navigate("/songs");
    });
  };

  return (
    <section className="showSection">
      <h1>Show</h1>

      <section className="showSongSection">
        <h2>Song name: {song.name}</h2>
        <p>Song Artist: {song.artist}</p>
        <p>Song time: {(song.time / 60).toFixed(2).replace(".", ":")}</p>
        <p>Favorite: {song.is_favorite ? "🌟" : null}</p>
      </section>
      <Button
        variant="outline-secondary"
        onClick={() => {
          navigate("/songs");
        }}
      >
        BACK
      </Button>
      <Link to={`/songs/${id}/edit`}>
        <Button variant="outline-primary">EDIT</Button>
      </Link>
      <Button
        variant="outline-danger"
        onClick={() => {
          deleteSong();
        }}
      >
        DELETE
      </Button>
    </section>
  );
};

export default ShowSong;
