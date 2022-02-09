import axios from "axios";
import Song from "./Song";
import { useEffect, useState } from "react";

function AllSongs() {
  const API = process.env.REACT_APP_API_URL;
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setAllSongs(response.data))
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div className="allSongs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((eachSong) => {
              return <Song key={eachSong.id} song={eachSong} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AllSongs;
