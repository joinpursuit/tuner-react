import React from "react";
import Albums from "../../components/Albums/Albums";
import Button from "../../components/ButtonComponent/ButtonComponent";
import  SongDetails  from "../../components/SongDetails/SongDetails";
import "./Show.css";
const Show = () => {
  return (<>
    <div className="show">
      <h2>Show</h2>
     <SongDetails />
      <Button/>
     <Albums />
    </div> 
    
    
  </>);
};

export default Show;
