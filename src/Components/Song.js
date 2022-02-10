import { Link } from "react-router-dom";

export default function Song({ song }) {
    const { id, title, artist, album, length, is_favorite } = song;
    return (
        <div>
            <p>{title} - {artist}</p>
            <Link to={`/songs/${id}`}>Show Details 🔍</Link>
        </div>
    )
}