import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditSong.scss";

const EditSong = () => {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setName(res.data.name);
        setArtist(res.data.artist);
        setAlbum(res.data.album);
        setIsFavorite(res.data.is_favorite);
        setTime(res.data.time);
      })
      .catch((err) => {
        navigate("/songs-error");
      });
  }, [id, navigate]); // eslint-disable-line

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "artist") {
      setArtist(value);
    } else if (name === "album") {
      setAlbum(value);
    } else if (name === "isFavorite") {
      if (checked) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } else if (name === "time") {
      setTime(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSong = {
      name: name,
      artist: artist,
      album: album,
      is_favorite: isFavorite,
      time: time,
    };

    if (
      newSong.name === "" ||
      newSong.artist === "" ||
      newSong.album === "" ||
      !Number(newSong.time)
    ) {
      return alert(
        "Please fill out all fields & make sure the time is a number"
      );
    }

    axios
      .put(`${API}/songs/${id}`, newSong)
      .then(() => {
        navigate("/songs");
      })
      .catch((err) => {
        navigate("/songs-error");
      });
  };

  return (
    <section className="editSection">
      <h1>Edit</h1>

      <section className="editSongSection">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Song name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicArtist">
            <Form.Label>Song artist</Form.Label>
            <Form.Control
              type="text"
              name="artist"
              value={artist}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAlbum">
            <Form.Label>Song album</Form.Label>
            <Form.Control
              type="text"
              name="album"
              value={album}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicFavorite">
            <Form.Label>Favorite</Form.Label>
            <Form.Check
              type="checkbox"
              name="isFavorite"
              checked={isFavorite}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicTime">
            <Form.Label>Song time (in seconds)</Form.Label>
            <Form.Control
              type="number"
              name="time"
              value={time}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </section>
  );
};

export default EditSong;
