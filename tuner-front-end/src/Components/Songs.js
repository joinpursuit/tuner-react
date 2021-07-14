import React, { useState, useEffect } from 'react'
import Song from '../Components/Song.js'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'

export default function Songs() {

    const [songs, setSongs] = useState([])
    const API = apiURL()
    console.log(songs)

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((response) => {
            setSongs(response.data)
            },
            (error) => {
                console.log("Error in <Songs /> .then(): ", error)
            }).catch(e => {
            console.warn("Error in <Songs /> .catch(): ", e)
        })
    }, [API])

    return (
        <table className='Songs'>
            <thead>
                <tr>
                    <th>Fav</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Time</th>
                </tr>
            </thead>
            {songs.map((song) => {
                return <Song key={song.id} song={song} />
            })}
        </table>
    )
}
