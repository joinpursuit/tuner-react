// import "./App.css";
// import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

//Components
import NavBar from "./Components/NavBar";
import AllSongs from "./Components/AllSongs";
import SongDetails from "./Components/SongsDetails";
import SongEdit from "./Components/SongEdit";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/:id/edit" element={<SongEdit />} />
      </Routes>
    </div>
  );
}

export default App;
