import React from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

const API = apiURL();
export default function SongListItem() {
  const [song, setSong] = useState({});
  const { id } = useParams();

  const fetchSong = async () => {
      
    try {
      const song = await axios.get(`${API}/songs/${id}`);
      setSong(song.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
      fetchSong()
  })

  return(
       <div>
           <h1>One Song</h1>
           {song.name}
           </div>)
       
}
