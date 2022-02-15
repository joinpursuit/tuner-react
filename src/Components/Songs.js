import axios from "axios";
import { useState, useEffect } from "react";
import Song from './Song'

function Songs() {

  const URL = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${URL}/songs`)
      .then((response) => {console.log(response.data)
    return setSongs(response.data)})
      .catch((error) => console.warn(error));
  }, [URL]);

  // const total = songs.reduce((acc, _) => acc += 1, 0)

  const songsFile = songs.map((song, id) => {
    return (
        <Song 
            song={song}
            id={id}
            key={id}
        />
    )}
)

  return (
    <div className="container">
            
    <section>
    <br />
        <fieldset style={{ color: "#66A3A3" }}>
            <br />
            <legend>SONGS</legend>
  
      <table>
          <thead>
        <tr>
          <th>Song</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
        </thead>

        <tbody>{ songsFile }</tbody>
        {/* <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody> */}
        </table>

        </fieldset>
              
              </section>
          </div> 
                  
      );
  };
  

export default Songs;