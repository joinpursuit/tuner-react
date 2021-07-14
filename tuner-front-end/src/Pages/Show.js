import React from 'react'
import SongDetails from '../Components/SongDetails'

function Show({deleteSong}) {
    return (
        <div>
            Show 
            <SongDetails deleteSong={deleteSong}/>
        </div>
    )
}

export default Show;