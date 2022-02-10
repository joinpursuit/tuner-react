import React from 'react';
import "./Album.css"
const Album = ({album}) => {

    return <tr>
    <td> {album.albumname}</td> 
    <td><span>{album.albumid}</span></td>
    <td>{album.releasedate}</td>
    <td>{album.is_favorite ? '✔' : '❌' }</td>
   
      </tr>;
};

export default Album;

