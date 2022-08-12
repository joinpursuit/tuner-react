import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const SongNew = () => {
	const [song, setSong] = useState({
		name: '',
		artist: '',
		album: '',
		time: '',
		is_favorite: false,
	});

	const navigate = useNavigate();

	const newSong = (song) => {
		axios
			.post(`${API}/songs/new`, song)
			.then(() => {
				navigate('/songs');
			})
			.catch((error) => console.warn(error));
	};

	const handleNewSong = (event) => {
		setSong({ ...song, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		newSong(song);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name: </label>
					<input
						id='name'
						value={song.name}
						type='text'
						onChange={handleNewSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='artist'>Artist: </label>
					<input
						id='artist'
						value={song.artist}
						type='text'
						onChange={handleNewSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='album'>Album: </label>
					<input
						id='album'
						value={song.album}
						type='text'
						onChange={handleNewSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='time'>Time: </label>
					<input
						id='time'
						value={song.time}
						type='text'
						onChange={handleNewSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='is_favorite'>Favorite: </label>
					<input
						id='is_favorite'
						value={song.is_favorite}
						onChange={handleNewSong}
						required
					></input>
				</div>

				<input type='submit' id='submit' value='Add A New Song!' />
			</form>

			<button type='button'>
				<Link to='/songs'>Back</Link>
			</button>
		</section>
	);
};

export default SongNew;
