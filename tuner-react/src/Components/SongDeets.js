import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const SongDeets = () => {
	let { id } = useParams();
	const [song, setSongs] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/songs/${id}`)
			.then((response) => {
				setSongs(response.data);
				navigate(`/songs/${id}`);
			})

			.catch(() => {
				navigate('/not found');
			});
	}, [id, navigate]);

	const deleteASong = () => {
		axios
			.delete(`${API}/songs/${id}`)
			.then(() => {
				navigate('/songs');
			})
			.catch(() => {
				console.warn('error!!!!!');
			});
	};

	return (
		<article>
			<h3>Name: {song.name}</h3>
			<h3>Artist: {song.artist}</h3>
			<h3>Album: {song.album}</h3>
			<h3>Time: {song.time}</h3>
			<h3>Favorite: {song.is_favorite ? '🥰' : '🤬'}</h3>

			<div>
				<div>
					<Link to={`/songs`}>
						<button>Navigate to Songs</button>
					</Link>
				</div>
				<div>
					<Link to={`/songs/${song.id}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<button onClick={deleteASong}>Delete</button>
				</div>
			</div>
		</article>
	);
};

export default SongDeets;
