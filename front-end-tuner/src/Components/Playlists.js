import Card from "react-bootstrap/Card";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [show, setShow] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ name: "", creator: "" });
  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch((e) => console.log("Playlists Cannot Be Retrieved", e));
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/playlists/`, newPlaylist)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange = (e) => {
    setNewPlaylist({ ...newPlaylist, [e.target.id]: e.target.value });
  };
  return (
    <Container className="m-auto mt-5 " align="center">
      {show ? (
        <div style={{ display: "block", padding: 30, color: "white" }}>
          <h3>Add New Playlist</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Playlist Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={newPlaylist.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                id="creator"
                name="creator"
                value={newPlaylist.artist}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="outline-success" type="submit" className="mt-3">
              Submit
            </Button>
            <Button
              variant="outline-danger"
              type="submit"
              className="mt-3"
              onClick={() => setShow(!show)}
            >
              Cancel
            </Button>
          </Form>
        </div>
      ) : (
        <Button
          variant="outline-danger"
          type="submit"
          className="mt-3"
          onClick={() => setShow(!show)}
        >
          {console.log(show)}
          Add Playlist
        </Button>
      )}
      {playlists.map((playlist, idx) => {
        return (
          <Card
            style={{ width: "50%" }}
            className="m-auto mt-5"
            key={idx}
            onClick={() => navigate(`/playlists/${playlist.id}`)}
          >
            <Card.Body>
              <Card.Title>{playlist.name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Made by</Card.Subtitle>
              <Card.Text>{playlist.creator}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default Playlists;
