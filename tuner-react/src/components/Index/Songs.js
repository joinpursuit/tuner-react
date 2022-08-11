import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";
import "./Songs.scss";

const Songs = () => {
  const API = process.env.REACT_APP_API_URL;

  const [songs, setSongs] = useState([]);
  const [songID, setSongID] = useState({});
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`${API}/songs`).then((res) => {
      setSongs(res.data);
    });
  }, []); // eslint-disable-line

  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <tr key={song.id}>
          <td>{song.is_favorite ? "🌟" : null}</td>
          <td>
            <Link to={`/songs/${song.id}`} className="songLink">
              {song.name}
            </Link>
          </td>
          <td>{song.artist}</td>
          <td>{(song.time / 60).toFixed(2).replace(".", ":")}</td>
          <td>
            <Link to={`/songs/${song.id}/edit`}>
              <Button variant="outline-primary">EDIT</Button>
            </Link>

            <Button
              variant="outline-danger"
              onClick={() => {
                handleShow(song.id);
              }}
            >
              DELETE
            </Button>
          </td>
          <ConfirmDelete
            show={show}
            handleClose={handleClose}
            songID={songID}
            deleteSong={deleteSong}
          />
        </tr>
      );
    });
  };

  const handleShow = (songId) => {
    setSongID(songId);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const deleteSong = async (songID) => {
    await axios.delete(`${API}/songs/${songID}`).then(() => {
      setSongs(songs.filter((song) => song.id !== songID));
    });

    handleClose();
  };

  return (
    <section className="indexSection">
      <header className="SectionHeader">
        <h1>Index</h1>
        <Link to="/songs/new">
          <Button variant="outline-primary" className="newSongButton">
            NEW
          </Button>
        </Link>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Override</th>
          </tr>
        </thead>
        <tbody>{renderSongs()}</tbody>
      </Table>
    </section>
  );
};

export default Songs;
