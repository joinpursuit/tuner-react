import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import "./SongDetails.css"

 const SongDetails = () => {
    const [song, setSong] = useState({
        date: "undefined",
        item_name: "undefined",
        amount: "undefined",
      });
      const API = process.env.REACT_APP_API_URL;
      const { id } = useParams();
    
      useEffect(() => {
        const fetchData = async () => {
          const songData = await axios.get(API + "/songs/" + id);
          setSong(songData.data);
        };
        fetchData();
      }, []);
    
     
      const {  name, artist, album, time, is_favorite } = song;
  return (<div> 
      <div className="song-detail">
      <h3> <span>Name :</span>  {`${name}`}</h3>
      <h3><span>Artist :</span>  {`${artist}`}</h3>
      <h4><span>Album :</span>  {`${album}`}</h4>
      <h4><span>Year :</span>  {`${time}`}</h4>
      <h4><span>Favorite :</span>   {" "}{is_favorite ? "✔" : "X"}</h4>
    </div>

  </div>);
};

export default SongDetails;