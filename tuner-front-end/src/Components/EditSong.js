import { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from '../utils/apiURL';



const EditSong = () => {
  const API = apiURL();
	let { id } = useParams();
	let history = useHistory();

	const [song, setSong] = useState({
		name: '',
		artist: '',
		album: '',
		time: '',
		isFavorite: false,
	});

	const songUpdate = (songUpdated) => {
		axios
			.put(`${API}/songs/${id}`, songUpdated)
			.then(
				() => {
					history.push(`/songs/${id}`);
				},
				(error) => console.log(error)
			)
			.catch((c) => console.log(c));
	};

	const handleChange = (e) => {
		setSong({ ...song, [e.target.id]: e.target.value });
	};

	const handleFavorite = () => {
		setSong({ ...song, is_Favorite: !song.is_Favorite });
	};

	useEffect(() => {
		axios.get(`${API}/songs/${id}`).then(
			(res) => setSong(res.data),
			(error) => history.push(`/not-found`)
		);
	}, [history, id, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    songUpdate(song, id)
  }

	return <div className='EditSong'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input 
      id="name"
      type="text" 
      value={song.name}
      placeholder="Song Name"
      onChange={handleChange}
      />
      <label htmlFor="artist">Artist</label>
      <input 
      id="artist"
      type="text"
      value={song.artist} 
      onChange={handleChange}
      />
      <label htmlFor="album">Album</label>
      <input 
      id="album"
      type="text"
      value={song.album}
      onChange={handleChange} 
      />
      <label htmlFor="time">Time</label>
      <input 
      id="time"
      type="text" 
      value={song.time}
      onChange={handleChange}
      />
      <label htmlFor="is_favorite">Favorite</label>
      <input 
      id="is_favorite"
      type="checkbox"
      value={song.is_Favorite}
      onChange={handleFavorite} 
      />
      <input type="submit" />
    </form>
  </div>;
};

export default withRouter(EditSong);
