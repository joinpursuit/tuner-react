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
    
     
      const {  artistname, genre, nationality, activefrom, dateofbirth, skill} = song;
  return (<div >
    <aside className="grid">
    <h2>Talents</h2> 
    <br/>
     <li>{skill}</li> 
    </aside>
      <div className="song-detail">
      <h3> <span>ArtistName :</span>  {`${artistname}`}</h3>
      <h3><span>Genre :</span>  {`${genre}`}</h3>
      <h4><span>Nationality :</span>  {`${nationality}`}</h4>
      <h4><span>Date of Birth :</span>  {`${dateofbirth}`}</h4>
      <h4><span>Year Active :</span>  {`${activefrom}`}</h4>
  
    </div>

  </div>);
};

export default SongDetails;