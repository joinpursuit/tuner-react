import React from "react";
import { Link } from "react-router-dom";
import "./Song.css";

const Song = ({ song }) => {
  const { name, artist, album, id} = song;
  
  return (

    <tr>
    <td>{name}</td>
       <td>{artist}</td>
       <td>{album}</td>
    <td>
      <Link to={`/songs/${song.id}`}>🔎</Link>
    </td>
  </tr>
    // <div className="song">
    //   <div>{name}</div>
    //   <div>{artist}</div>
    //   <div>{album}</div>
    //   {/* <td>{time}</td> */}
    //   {/* <td> {is_favorite ? "✔" : "X"}</td> */}
    //   <Link to={'/songs/' + id}><div>more...</div></Link>
    // </div>
  );
};

export default Song;
