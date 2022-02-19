import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";

function ShowSongs() {
  const URL = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState({});
  // console.log(songs)
  const navigate = useNavigate();
  // useParams returns an object that we can deconstruct from.
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/songs/${id}`)
      // the response we get from the server is response.data
      .then((response) =>
        // console.log(response.date)
        setSong(response.data)
      )
      .catch((error) => console.warn(error));
  }, [URL, id]);

  //  console.log(songs)

  // Function that makes an axios request
  const handleDelete = () => {
    // make a delete request to /songs/:id
    axios
      .delete(`${URL}/songs/${id}`)
      // redirect them to /songs
      .then(() => navigate(`/songs`))
      .catch((error) => console.warn(error));
  };

  return (
    <div className="songs">
      <br />
      <br />
      <fieldset style={{ color: "#66A3A3" }}>
        <legend>Songs</legend>
        <div className="showSongs">
          <h4 className="favorite">
            <span></span>'{song.name}' &nbsp;
            {song.is_favorite ? "favorite! 💖" : null}
          </h4>

          <h4 className="album">
            <span>Album:</span>
            <span>{song.album}</span>
          </h4>
          <h4 className="artist">
            <span>Artist:</span>
            <span>{song.artist}</span>
          </h4>
          <div>
            <h4 className="time">
              <span>Time:</span>
              <span>{song.time}</span>
            </h4>
          </div>

          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/songs`}>
                <button className="button back">Back</button>
              </Link>
            </div>

            <div>
              <Link to={`/songs/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>

            <div>
              <button
                type="button"
                className="button delete"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default ShowSongs;
