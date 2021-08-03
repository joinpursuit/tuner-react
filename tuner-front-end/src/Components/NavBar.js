import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/playlists">Playlists</NavLink>
        <NavLink to="/playlists/new">New Playlist</NavLink>
    </nav>
  );
}