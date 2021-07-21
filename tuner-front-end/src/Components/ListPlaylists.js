import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import PlaylistListItem from "./PlaylistListItem";

const API = apiURL();

function PlaylistsList() {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    const getThePlaylists = () => {
      try {
        console.log('About to make a "GET" to:', `${API}/playlists`);
        setTimeout(async () => { // putting call inside setTimeout to pause execution for a bit, educational purposes only.
          
          const res = await axios.get(`${API}/playlists`);
          console.log('Received a response', res.data);
          setPlaylists(res.data.payload);

        }, 5000)
      } catch (err) {
        console.log(err);
      }
    };

    getThePlaylists();
  }, []);
  
  return (
    <div className="Playlists">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this playlist</th>
            </tr>
          </thead>
          <tbody>
            {playlists.map((playlist) => {
              return <PlaylistListItem key={playlist.id} playlist={playlist} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default PlaylistsList;
