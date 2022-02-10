import { useState, useEffect } from "react";
import Format from "./Format.js";
import axios from "axios";

import ImageList from '@mui/material/ImageList';


const Songs = ({parentCallBack}) => {
  const [songs, setSongs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${URL}/songs`)
    .then((response) => { console.log(response.data); return setSongs(response.data)})
    .catch((e)=> {console.error("catch", e)})
  }, [URL]);

  const total = songs.reduce((acc, _) => acc += 1, 0)

  
  //useEffect to update parentCallBack/setUpdate and pass total up to parent component  
  //only runs when one of its dependencies update
  useEffect(() => {
      parentCallBack(total)
  }, [parentCallBack, total])

  return (
    <div className="Songs container">
      <section className="container">
        {/* <table className="container"> */}
          {/* <thead className="row"><tr className="d-flex justify-content-between text-white pb-2"><td className="col-auto">Favorites</td><td className="col-auto">Title</td><td className="col-auto">Artist</td><td className="col-auto">Time</td></tr></thead> */}
          {/* <tbody className="row"> */}
          <ImageList sx={{ width: "100%", height: "auto" }} gap={5}>
            {songs.map((song) => {
              return <Format key={song.id} song={song} />;
            })}
          </ImageList>

          {/* </tbody>
        </table> */}
      </section>
    </div>
  );
}

export default Songs;


