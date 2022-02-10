import "./App.css";
// Dependencies
import { Link, Route, Routes } from "react-router-dom";

// Pages/Components
import NavBar from "./Components/NavBar";
import Songs from "./Pages/Songs";
import SongsIndex from "./Pages/SongIndex";
import SongEdit from "./Pages/SongEdit";
import NewSong from "./Pages/NewSong";
function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <header>
          <h1>TUNER</h1>
        </header>
      </Link>
      <main>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Songs />} />
          <Route path="/:id" element={<SongsIndex />} />
          <Route path="/:id/edit" element={<SongEdit />} />
          <Route path="/new" element={<NewSong />} />
        </Routes>
        <aside>Aside</aside>
        <aside></aside>
      </main>
      <footer>Footer</footer>
      <footer></footer>
    </div>
  );
}
export default App;
