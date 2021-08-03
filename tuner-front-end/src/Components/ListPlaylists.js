import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import PlaylistListItem from "./PlaylistListItem";

const API = apiURL();

function PlaylistsList() {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    const getThePlaylists = async () => {
      try {
          const res = await axios.get(`${API}/playlists`);
          setPlaylists(res.data.payload);
      } catch (error) {
        console.log(error);
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
              <th>Name</th>
              <th>Edit</th>
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
