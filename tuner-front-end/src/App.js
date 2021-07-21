// dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
// import Show from "./Pages/Show";

// components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* <Route exact path="/playlists/:id">
            <Show />
          </Route> */}
          <Route path="/playlists/new">
            <New/>
          </Route>
          <Route exact path="/playlists">
            <Index />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
