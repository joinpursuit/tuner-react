import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

function Playlist() {
  let { id } = useParams();
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [songToAdd, setSongToAdd] = useState({
    playlists_id: id,
    songs_id: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}/songs`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((e) => console.log("Playlist songs call error", e));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}`)
      .then((res) => {
        setPlaylistData(res.data);
      })
      .catch((e) => console.log("Playlist Data Cannot Be Retrieved", e));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => {
        setAllSongs(res.data);
      })
      .catch((e) => console.log("History call error", e));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/playlists/${id}/songs`, songToAdd)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (songIdToDelete) => {
    axios
      .delete(`${API}/playlists/1/songs/${songIdToDelete}`)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container className="mt-4" align="center">
      {console.log(songToAdd)}
      <h3 style={{ textAlign: "center", color: "white" }}>
        {playlistData.name}
      </h3>
      <h5 style={{ textAlign: "center", color: "white" }}>
        by {playlistData.creator}
      </h5>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, idx) => {
            return (
              <tr key={idx}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td onClick={() => handleDelete(song.id)}>🗑️</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        variant="outline-success"
        type="submit"
        className="m-1"
        onClick={handleShow}
      >
        Add A Song
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Song To {playlistData.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Select From Song Library</Form.Label>
              <Form.Control
                as="select"
                value={songToAdd.songs_id}
                id="songs_id"
                name="songs_id"
                onChange={(e) =>
                  setSongToAdd({
                    ...songToAdd,
                    [e.target.id]: e.target.value,
                  })
                }
                required
              >
                <option value={null}></option>
                {allSongs.map((eachsong, idx) => {
                  return (
                    <option key={idx} value={eachsong.id}>
                      {eachsong.name} by {eachsong.artist}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Song To Playlist
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default Playlist;
