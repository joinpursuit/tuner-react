import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Error from "./pages/Error";
import Edit from "./pages/Edit";

// Components
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="/songs/:id" element={<Show />} />
        <Route path="/songs/:id/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
