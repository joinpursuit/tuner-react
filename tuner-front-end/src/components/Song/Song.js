import React from "react";
import { Link } from "react-router-dom";
import "./Song.css";

const Song = ({ song }) => {
  const { artistname, nationality, activefrom, artistid } = song;
  
  return (

    <tr>
    <td>{artistname}</td>
       <td>{nationality}</td>
       <td>{activefrom}</td>
    <td>
      <Link to={`/songs/${artistid}`}>
        {/* <img src="./Song.png" alt="detail"/> */}
         
         
         🔎</Link>
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
