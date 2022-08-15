import { useEffect, useState } from 'react'
import Song from './Song'
import axios from 'axios'
import {Table} from 'react-bootstrap'
const API = process.env.REACT_APP_API_URL


function Songs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get(`${API}/songs/`).then((res) => {
      setSongs(res.data)
    })
  }, [])

  return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>Favorite</th>
          <th>Song Name</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, id) => {
          return <Song key={song.id} song={song} index={id} />
        })}
      </tbody>
    </Table>
  )
}

export default Songs