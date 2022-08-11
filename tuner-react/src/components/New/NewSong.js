import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./NewSong.scss";

const NewSong = () => {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [time, setTime] = useState("");

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

  const handleSubmit = async (e) => {
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
      alert("Please fill out all fields & make sure the time is a number");
    } else {
      if (newSong.time.includes(".")) {
        newSong.time = newSong.time.split(".")[0];
      }

      await axios.post(`${API}/songs`, newSong).then(() => {
        clearForm();
        navigate("/songs");
      });
    }
  };

  const clearForm = () => {
    setName("");
    setArtist("");
    setAlbum("");
    setIsFavorite(false);
    setTime("");
  };

  return (
    <section>
      <header className="SectionHeader">
        <h1>New</h1>
      </header>

      <Form className="NewSongForm">
        <Form.Group controlId="formSongName">
          <Form.Label>Song Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formArtist">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            value={artist}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAlbum">
          <Form.Label>Album</Form.Label>
          <Form.Control
            type="text"
            name="album"
            value={album}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formIsFavorite">
          <Form.Label>Favorite</Form.Label>
          <Form.Check
            type="checkbox"
            name="isFavorite"
            checked={isFavorite}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time (in seconds)</Form.Label>
          <Form.Control
            type="number"
            name="time"
            value={time}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add new song
        </Button>
      </Form>
    </section>
  );
};

export default NewSong;
