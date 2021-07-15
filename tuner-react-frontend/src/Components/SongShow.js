import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiURL } from "../util/apiURL"
import { Link } from "react-router-dom"

const API = apiURL();


function SongShow() {
  const [song, setSong ] = useState("");
  const { id } = useParams();
useEffect(async () => {
  try {
    const res = await axios.get(`${API}/songs/${id}`)
    setSong(res.data)
  } catch (error) {
    console.log(error)
  }
})

  return (
    <div>
      <h1>The Song</h1>
      {song.name}
      <Link to={`/songs/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default SongShow

