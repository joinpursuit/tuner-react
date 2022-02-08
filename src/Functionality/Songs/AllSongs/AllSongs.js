import axios from "axios"
import { useState, useEffect } from "react"
import EachSong from "../EachSong"
import "./AllSongs.css"

const AllSongs = () => {
    const URL = process.env.REACT_APP_API_URL
    const [ songs, setSongs ] = useState([])

    useEffect(() => {
        axios
        .get(`${URL}/songs`)
        .then((response) => setSongs(response.data))
        .catch((error) => console(error))
    }, [URL])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Song</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => {
                        return <EachSong key={index} song={song} index={index}/> 
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllSongs