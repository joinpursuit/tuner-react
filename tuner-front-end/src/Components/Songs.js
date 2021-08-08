import Song from './Song';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiURL } from '../utils/apiURL'

const API = apiURL()


const Songs = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		axios.get(`${API}/songs`)
		.then((res) => setSongs(res.data.payload),
		(e) => console.log(e))
		.catch((c) => console.log(c))
	}, [])
	
	return (
		<div className="Songs">
			<section>
				<table>
					<thead>
						<tr>
							<th>Favorite</th>
							<th>Song</th>
							<th>Artist</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						{songs.map((song) => {
							return <Song key={song.id} song={song}/>
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default Songs;