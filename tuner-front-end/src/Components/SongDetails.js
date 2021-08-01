import React, {useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { apiURL } from '../util/apiURL'
import axios from 'axios'
import cassette from '../Images/cassette.png'

export default function SongDetails() {

    const [song, setSong] = useState({})
    const { id } = useParams()
    const API = apiURL()
    const history = useHistory()

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(
            (response) => {
                setSong(response.data)
            },
            (error) => {
                console.log(`Error in songDetails .then: `, error)
            }
        ).catch((e) => {
            console.warn(`Error in songDetails .catch: `, e)
        })
    }, [API, id])

    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
        .then(
            () => {history.push('/songs')},
            (error) => {console.log(`Error in <SongDetails> deleteSong`, error)}
        )
        .catch((c) => {console.warn(`Catch in <SongDetails> deleteSong:`, c)})
    }
    const handleDelete = () => {
        deleteSong()
    }


    return (
        <article className='SongDetails'>
            <h2>{song.is_favorite ? <img src={cassette} alt="A cassette favorites icon" /> : null} {song.name}</h2>
            <h3>Artist: {song.artist}</h3>
            <p>From the album '<span className='Album'>{song.album}</span>'</p>
            <p>Time: {song.time}</p>
            <Link to='/songs'>
                <button>Back</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
            <Link to='/songs/edit'>
                <button>Edit</button>
            </Link>
        </article>
    )
}
