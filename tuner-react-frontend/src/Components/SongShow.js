import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { apiURL } from "../util/apiURL"
import { Link } from "react-router-dom"

const API = apiURL();


function SongShow() {
  const [song, setSong ] = useState("");
  const { id } = useParams();
  let history = useHistory();

useEffect(async () => {
  try {
    const res = await axios.get(`${API}/songs/${id}`)
    setSong(res.data)
  } catch (error) {
    console.log(error)
  }
})

const deleteSong = async() => {
  try {
    await axios.delete(`${API}/songs/${id}`)
  } catch (error) {
    console.log(error)
  }
}
const handleDelete = async () => {
  await deleteSong();
  history.push('/songs')
}

  return (
    <div>
      <h1>The Song</h1>
      <h1>Name: {song.name}</h1>
      <h2>Album: {song.album}</h2>
      <h3>Time: {song.time}</h3>
      {/* <p>Favorite: {song.is_favorite}</p> */}
      <Link to={`/songs/edit/${id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default SongShow

