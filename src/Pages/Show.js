import React from 'react';
import './Show.css';
import DisplaySong from '../Components/DisplaySong';

const Show = () => {
  return (
    <div className="Show">
      <h1> Song Info </h1>
      <DisplaySong />
    </div>
  );
};

export default Show;