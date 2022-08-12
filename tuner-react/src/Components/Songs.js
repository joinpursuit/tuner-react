import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/songs`)
			.then((response) => {
				setSongs(response.data);
			})
			.catch((error) => console.warn(error));
	}, [songs]);

	return (
		<div className='songs'>
			<section>
				<h1>Songs</h1>
				<hr />
				<ul>
					<li>Name{songs.title}</li>
					<li>Album{songs.album}</li>
					<li>Favorite{songs.is_favorite}</li>
					<li>Time{songs.time}</li>
				</ul>
				{songs.map((song) => {
					return <Songs key={song.id} song={song} />;
				})}
			</section>
			<br />
			<button>
				<Link to={'/'}>Back</Link>
			</button>
		</div>
	);
};

export default Songs;
