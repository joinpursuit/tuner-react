import React, { useState, useEffect } from 'react'
import Song from '../Components/Song.js'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'

export default function Songs() {

    const [songs, setSongs] = useState([])
    const API = apiURL()
    console.log(songs)
    console.log(API)

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((response) => {
            setSongs(response.data)
            },
            (error) => {
                console.log("Error in <Songs />: ", error)
            }).catch(e => {
            console.warn("Error: ", e)
        })
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Fav</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Time</th>
                </tr>
            </thead>
            {/* for each song, return <Song /> */}
            <Song />
        </table>
    )
}
