import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewSong.css"

const API = process.env.REACT_APP_API_URL;
const NewSong = () => {
  const [song, setSong] = useState({
    artistname: "", genre: "", nationality: "", activefrom: "", dateofbirth: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
      axios
        .post(`${API}/songs/`, song)
        .then(() => navigate(`/songs`));
  };

  const handleTextChange = (event) => {
    const { value, id } = event.target;
    setSong({ ...song, [id]: value });
  };

  const handleNevermind = () => navigate(`/songs/`);

  return (
    <div className="newSong">
      <form className="newSong-control" onSubmit={handleSubmit}>
      <br />
        <label htmlFor="artistname">Artist Name :</label>
        <input
          type="text"
          id="artistname"
          value={song.artistname}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="genre">Genre :</label>
        <input
          type="text"
          id="genre"
          value={song.genre}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="nationality">Nationality :</label>
        <input
          id="nationality"
          type="text"
          value={song.nationality}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="activefrom">Year Active :</label>
        <input
          id="activefrom"
          type="number"
          value={song.activefrom}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="dateofbirth">Date of Birth :</label>
        <input
          id="dateofbirth"
          type="boolean"
          value={song.dateofbirth}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
      
        <label htmlFor="skill">Skill :</label>
        <input
          id="skill"
          type="boolean"
          value={song.skill}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
      <br />
        <input type="submit" className="form-submit" />
      </form>
      <button onClick={handleNevermind} className="form-nevermind">
        Nevermind
      </button>
    </div>
  );
};

export default NewSong;