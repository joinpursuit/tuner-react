import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function Details() {
  const [song, setSong] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const editSong = async () => {
    try {
      await axios.put(`${API}/songs/${id}`);
    } catch (error) {
      return error;
    }
  }
  
  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (error) {
      return error;
    }
  };



  const goBack = () => {
    history.push("/songs");
  };

  useEffect(() => {

    const fetchSong = async () => {
      try {
        const result = await axios.get(`${API}/songs/${id}`);
      //   console.log(result);
        setSong(result.data.payload);
      } catch (error) {
        return error;
      }
    };
    fetchSong();
    
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    goBack();
  };

  const handleEdit = async () => {
    await editSong();
  }

  return (
    <section className="Details">
      <p>
        <b>Name:</b> {song.name}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>
      <button onClick={handleEdit}>Edit</button>
    </section>
  );
}

export default withRouter(Details);
