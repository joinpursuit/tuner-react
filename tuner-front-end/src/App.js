
//npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect,  } from "react";
//connect api 
import { apiURL } from "./util/apiURL";
//axios to connect -> npm install axios
import axios from 'axios';

import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import NavBar from "./Components/NavBar";


// const API = apiURL();

function App() {
  const [songs, setSongs] = useState([]);
  let history = useHistory()
//add a new song using localhost instead of API const
    const addSong = (newSong) => {
      axios.post("http://localhost:3011/songs", newSong).then(
        (response) => {
          setSongs([...songs, newSong])
          history.push("/songs")
        }).catch((err) => {
          console.log(err)
        });
    }

    const deleteSong = (id) => {
      axios.delete(`http://localhost:3011/songs/${id}`)
      .then((response ) => {
          const updateArray = [...songs];
          // updateArray.splice(index, 1);
          updateArray.splice(songs.findIndex((song) => song.id === id))
          setSongs(updateArray);
          history.push("/songs")
          // return true;
        },
        (error) => console.error(error)
      ).catch((c) => console.warn("catch", c));
    };



    // const updateSong = (updatedSong, index) => {
    //   axios.put(`${API}/songs/${index}`, updatedSong).then((response) => {
    //     const updateArray= [...songs];
    //     updateArray[index] = updatedSong; 
    //     setSongs(updateArray);
    //   }, (error) => console.error(error)
    //   ).catch((c) => console.warn("catch", c));
    // };

    useEffect(() => {
      axios.get("http://localhost:3011/songs").then((response) => {
        const {data} =response;
        setSongs(data)
      })
    }, []);

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path ="/songs">
              <Index songs={songs}/>
            </Route>
            <Route path="/songs/new">
              <New addSong={addSong} />
            </Route>
            <Route exact path = "/songs/:id">
              <Show deleteSong={deleteSong} />
            </Route>
            <Route>
              {/* <Edit/> */}
            </Route>
            <Route path="*">
              <FourOFour/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App;