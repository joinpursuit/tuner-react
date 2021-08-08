import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect} from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import { apiURL } from '../utils/apiURL';

const API = apiURL()

const SongDetails = () => {
	const [song, setSong] = useState([]);
	const { id } = useParams();
	let history = useHistory()

	useEffect(() => {
		axios.get(`${API}/songs/${id}`)
		.then(res => {
			setSong(res.data)
		})
		.catch((e) => console.log(e))
		
	}, [id]);

	const handleDelete = async () => {
		try {
			const res = await axios.delete(`${API}/songs/${id}`)
			history.push('/songs')
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<article>
			<h1>Name: {song.name}</h1>
			<h1>Artist: {song.artist}</h1>
			<h1>Album: {song.album}</h1>
			<h1>Time: {song.time}</h1>
			<Link to='/songs'>
				<button>Back</button>
			</Link>
			<Link to={`/songs/${song.id}/edit`}>
			<button>Edit</button>
			</Link>
			<button onClick={handleDelete}>Delete</button>
		</article>
	);
};

export default withRouter(SongDetails);