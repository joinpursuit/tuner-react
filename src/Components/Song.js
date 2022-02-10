import { Link } from "react-router-dom";

export default function Song({ song }) {
    const { id, title, artist, album, length, is_favorite } = song;
    return (
        <div className="card">
            <h3 className="card-header">{title} - {artist}</h3>
            <p>Album: {album}</p>
            <p>Time: {length}</p>    
            <p>Favorite? {is_favorite ? '♥️' : '💔'}</p>
            <Link to={`/songs/${id}`}>More Options 🔍</Link>
        </div>
    )
}