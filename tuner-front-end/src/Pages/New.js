import React from 'react';
import SongNew from "../Components/SongNew"

function New({addSong}) {
    return (
        <div>
            New 
            <SongNew addSong={addSong}/>
        </div>
    )
}

export default New;