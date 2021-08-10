const Song = ({ song }) => {
    return (
        <div className="Card">
            <h4>{song.artist}</h4>
            {song.is_favorite === true ? <p><b>Favorite:</b> True</p> : <p><b>Favorite:</b> False</p>}
            <p><b>Album: </b>{song.album} {song.time}</p>
            <p><b>Song: </b>{song.name}</p>
        </div>
    )
}

export default Song;
