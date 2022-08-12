import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const SongEdit = () => {
    let { id } = useParams();
    const [song, setSong] = useState({
		name: '',
		artist: '',
		album: '',
		time: '',
		is_favorite: false,
	});

	const navigate = useNavigate();

	const editSong = (song) => {
		axios
			.post(`${API}/songs/${id}`, song)
			.then(() => {
				navigate('/songs');
			})
			.catch((error) => console.warn(error));
	};

    useEffect(() => {
        axios
          .get(`${API}/songs/${id}`)
          .then((response) => {
            setSong(response.data);
          })
          .catch((error) => console.warn(error));
      }, [id]);

      
	const handleEditSong = (event) => {
		setSong({ ...song, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		editSong(song);
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
						onChange={handleEditSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='artist'>Artist: </label>
					<input
						id='artist'
						value={song.artist}
						type='text'
						onChange={handleEditSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='album'>Album: </label>
					<input
						id='album'
						value={song.album}
						type='text'
						onChange={handleEditSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='time'>Time: </label>
					<input
						id='time'
						value={song.time}
						type='text'
						onChange={handleEditSong}
						required
					></input>
				</div>

				<div>
					<label htmlFor='is_favorite'>Favorite: </label>
					<input
						id='is_favorite'
						value={song.is_favorite}
						onChange={handleEditSong}
						required
					></input>
				</div>

				<input type='submit' id='submit' value='Edit A Song!' />
			</form>

			<button type='button'>
				<Link to='/songs'>Back</Link>
			</button>
		</section>
	);
};



export default SongEdit