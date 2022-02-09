// import "./App.css";
// import NavBar from "./Components/NavBar";
import { Route, Routes, Router } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

//Components
import NavBar from "./Components/NavBar";
import AllSongs from "./Components/AllSongs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
      </Routes>
    </div>
  );
}

export default App;
