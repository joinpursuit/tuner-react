import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

export const SongEditForm = () => {
  let { id } = useParams();
  let history = useHistory();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false ,
  });

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
    debugger
  };

  useEffect(() => {
    const fetchSongToEdit = async () => {
      try {
        let res;
        res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSongToEdit();
  }, [id]);

  const updateSong = async (songToEdit, id) => {
    try {
      await axios.put(`${API}/songs/${id}`, songToEdit);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSong(song, id);
    history.push(`/songs/${id}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title of Song:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Song "
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
    //   {song.isFavorite ? 'checked' : ""}
        checked={song.is_favorite}
        
        />

        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SongEditForm;
