import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {apiURL} from ("../../util/apiURL")

const API = apiURL()

export default function SongsList() {

const [songs, setSongs] = useState([])

    const fetchSongs = async() =>{
        const allSongs = await axios.get(`${API}/songs`)
        setSongs(allSongs)
    }

useEffect(()=>{
    fetchSongs()
    },[])

    return (
        <div>
            {songs}
        </div>
    )
}
