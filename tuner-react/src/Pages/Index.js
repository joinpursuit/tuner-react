import { Link } from "react-router-dom";
import axios from "axios"
import {useEffect, useState} from "react"

const API = process.env.REACT_APP_API_URL

export default function Index(){

    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
      axios.get(`${API}/songs`)
      .then((res) => {
       setSongs(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    console.log(songs)
    return(
        <div>
            <h1>All of the songs</h1>
            <Link to={`/songs/new`}>Add a new song</Link>
            <table align="center" style={{padding:"15px"}} width="50%" height="50%">
                <tr>
                    <th>Fav</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Time</th>
                </tr>
                    {songs.map((song, idx) => {
                        return (
                            <tr key={idx}>
                                <td> {song.is_favorite ? "⭐️" : ""}</td>
                                <td><Link to={`/songs/${song.id}`}>{song.name}</Link></td>
                                <td>{song.artist}</td>
                                <td>{song.time}</td>
                            </tr>
                        );
                    })}
            </table>
        </div>
    )
}