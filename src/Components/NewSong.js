import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Form() {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        album: "",
        artist: "",
        time: "",
        is_favorite: false,
    });

    const addSong = (newSong) => {
        axios
        .post(`${URL}/songs`, newSong)
        .then(() => {
            navigate(`/songs`);
        })
        .catch((error) => console.warn((error)));
    };

    const handleTextChange = (event) => {
        if (event.target.id === "is_favorite") {   
        setSong({...song, [event.target.id]: !song.is_favorite});
    } else {
        setSong({ ...song, [event.target.id]: event.target.value });
    }
}

    // const handleTextChange = (event) => {
    //     setSong({ ...song, [event.target.id]: event.target.value });
    //   };

      const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
    };

    return (
        <div className='New'>
           <br />
           <br />
            <form 
            className='newForm'
            onSubmit={handleSubmit}>
            <br />

                <fieldset
                style={{ color: "#66A3A3"}}>
                    <legend>Create a New Item</legend>
                    <br />

                        <h3>
                            <label htmlFor="name">Name:</label>
                            <input 
                                id='name'
                                value={song.name}
                                type='text'
                                onChange={handleTextChange}
                                placeholder='Name'
                                required
                            />
                        </h3>
                        <br />
                        <h3>
                            <label htmlFor="album">Album:</label>
                            <input 
                                id='album'
                                value={song.album}
                                type='text'
                                onChange={handleTextChange}
                                placeholder='Album'
                                required
                            />
                        </h3>
                        <br />
                        <h3>
                        <label htmlFor="artist">Artist:</label>
                            <input 
                                id='artist'
                                value={song.artist}
                                type='text'
                                onChange={handleTextChange}
                                placeholder='artist'
                                required
                            />
                        </h3>
                        <br />
                        <h3>
                            <label htmlFor="time">Time:</label>
                            <input 
                                id='time'
                                value={song.time}
                                type='text'
                                onChange={handleTextChange}
                                placeholder='time'
                                required
                            />
                        </h3>
                        <br />
                        <br />

                            
                        <label htmlFor="is_favorite">Favorite:</label>
                            <input
                                style={{ color: "white" }}
                                id="is_favorite"
                                type="checkbox"
                                onChange={handleCheckboxChange}
                                checked={song.is_favorite}
                            />
                        <br />

                        <button className='button submit'>
                            Submit
                        </button>
                </fieldset>
            </form>

        </div>
    );
};

export default Form;