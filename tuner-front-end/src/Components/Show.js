import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Util/apiUrl";
import "../App.css";

const API = apiUrl();

export default function Show() {
  const [song, setSong] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((error) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((response) => {
        history.push("/songs");
      })
      .catch((e) => {
        history.push("/not-found");
      });
  };

  const handleDelete = () => {
    deleteSong();
  };

  const previousPage = () => {
    history.push("/songs");
  };

  const editPage = () => {
    history.push(`/songs/${id}/edit`);
  };

  return (
    <div>
      <h1>Show</h1>
      <div className="song">
        <div className="song-header">
          {song.is_favorite ? <h2>⭐️</h2> : <h2>&nbsp;</h2>}
          <h2>
            {song.name} - By {song.artist}
          </h2>
        </div>
        <h3>{song.album}</h3>
        <p>{song.duration}</p>
      </div>
      <br />
      <div className="buttons">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={previousPage}>Back</button>
        <button onClick={editPage}>Edit</button>
      </div>
    </div>
  );
}
