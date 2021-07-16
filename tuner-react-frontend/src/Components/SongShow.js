import axios from 'axios'
import { useEffect, useState, } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { apiURL } from "../util/apiURL"
import { Link } from "react-router-dom"

const API = apiURL();


function SongShow() {
  let history = useHistory();
  const [song, setSong] = useState("");
  const { id } = useParams();
  useEffect( () => {
    const fetchSong = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`)
        setSong(res.data.payload)
      } catch (error) {
        console.log(error)
      }
    }

    fetchSong()
  }, [id])
  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`)
      history.push(`/songs`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{song.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{song.album}</h6>
          <p className="card-text">{song.artist} is the artist behind this awesome work. The duration of the song is {song.time}. </p>
          <form className="form-inline">
            <Link to={`/songs/edit/${id}`}>

              <button className="btn btn-outline-success" type="button">Edit</button>
            </Link>
            <button onClick={deleteSong} className="btn btn-sm btn-outline-secondary" type="button">Delete</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SongShow

