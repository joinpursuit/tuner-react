import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const DisplaySong = () => {
    const [song, setSong] = useState({});
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    

  return (
    <div className='DisplaySong'>
        DisplaySong
    </div>)
};

export default DisplaySong;
