import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Index from "./Components/Index";
import NewSong from "./Components/NewSong";
import OneSong from "./Components/OneSong";
import NavBar from "./Components/NavBar";
import EditSong from "./Components/EditSong";
import Playlists from "./Components/Playlists";
import Playlist from "./Components/Playlist";

//Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<OneSong />} />
          <Route path="/songs/new" element={<NewSong />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:id" element={<Playlist />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
