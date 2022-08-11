import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";

// import routes
import Home from "./pages/Home";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import New from "./pages/New.js";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="songs/:id/edit" element={<Edit />} />
        <Route path="/songs/:id" element={<Show />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
