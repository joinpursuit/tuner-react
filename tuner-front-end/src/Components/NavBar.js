import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link exact to="/">Home</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/playlists/new">New Playlist</Link>
    </nav>
  );
}