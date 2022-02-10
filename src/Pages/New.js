import React from 'react';
import './New.css';
import SongForm from '../Components/SongForm';

const New = () => {
  return (
    <div className="New">
      <h1>New Song</h1>
      <SongForm />
    </div>
  );
};

export default New;
