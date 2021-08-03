import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function PlaylistDetails() {
  const [playlist, setPlaylist] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const editPlaylist = async () => {
    try {
      await axios.put(`${API}/playlists/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  const deletePlaylist = async () => {
    try {
      await axios.delete(`${API}/playlists/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaylist = async () => {
    try {
      const result = await axios.get(`${API}/playlists/${id}`);
    //   console.log(result);
      setPlaylist(result.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = () => {
    history.push("/playlists");
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const handleDelete = async () => {
    await deletePlaylist();
    goBack();
  };

  const handleEdit = async () => {
    await editPlaylist();
  }

  return (
    <section className="Details">
      <p>
        <b>Name:</b> {playlist.name}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>
      <button onClick={handleEdit}>Edit</button>
    </section>
  );
}

export default withRouter(PlaylistDetails);
