import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import NavBar from "./components/NavBar/NavBar";
import FourOFour from "./components/404";
import Index from "./pages/Index";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Show from "./pages/Show";

import "./App.scss";

function App() {
  return (
    <section>
      <header className="tunerHeader navbar-dark bg-dark">
        <h3 className="tunerTitle">TUNER</h3>
      </header>

      <main className="tunerMain">
        <NavBar />
        <section className="tunerRoutesSection">
          <Routes>
            <Route path="/">
              <Route path="/" index element={<Homepage />} />
              <Route path="/songs" index element={<Index />} />
              <Route path="/songs/new" element={<New />} />
              <Route path="/songs/:id" element={<Show />} />
              <Route path="/songs/:id/edit" element={<Edit />} />
            </Route>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </section>
      </main>
    </section>
  );
}

export default App;
