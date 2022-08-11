import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const ConfirmDelete = ({ show, handleClose, songID, deleteSong }) => {
  const API = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState({});

  useEffect(() => {
    axios.get(`${API}/songs/${songID}`).then((res) => {
      setSong(res.data);
    });
  }, [songID]); // eslint-disable-line

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Song</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete the song: <strong>{song.name}</strong>
          ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => deleteSong(song.id)}>
          DELETE
        </Button>
        <Button variant="primary" onClick={handleClose}>
          CANCEL
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
