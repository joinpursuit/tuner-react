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
		<div className='Songs'>
			<section>
				<h1>Songs List</h1>
				<hr />
				<ul>
					<li>Name</li>
					<li>Album</li>
					<li>Favorite</li>
				</ul>
				{songs.map((song) => {
					return <Song key={song.id} song={song} />;
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
