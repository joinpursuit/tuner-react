import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import axios from "axios";
import New from "./pages/New";
import Show from "./pages/Show";
import "./App.css";
import { Switch, Route, useHistory} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  let history = useHistory()
 

  useEffect(() => {
    axios
      .get("http://localhost:3003/songs")
      .then((response) => setSongs(response.data))
      .catch((e) => console.log(e));
  }, []);

  const addSong = (song) => {
    axios
      .post("http://localhost:3003/songs", song)
      .then((response) => {
        setSongs([...songs, song])
        history.push("/songs")
      })
      .catch((e) => console.log(e))
  };

  const deleteSong = (id) => {
    axios
      .delete(`http://localhost:3003/songs/${id}`)
      .then((response) => {      
        const updateSongs = [...songs]
        updateSongs.splice(songs.findIndex((song)=> song.id === id))
        setSongs(updateSongs)
        history.push("/songs")
      })
      .catch((e) => console.log(e))
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/songs">
          <Index songs={songs} />
        </Route>
        <Route path="/songs/new">
          <New addSong={addSong} />
        </Route>
        <Route path="/songs/:id">
          <Show deleteSong={deleteSong} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
