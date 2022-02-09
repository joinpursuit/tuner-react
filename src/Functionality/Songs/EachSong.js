import { Link } from "react-router-dom"

const EachSong = ({song}) => {
    return (
        <tr>
            <td>{song.artist}</td>
            <td>{song.name}</td>
            <td><Link to={`/songs/${song.id}`}>🥁</Link></td>
        </tr>
    )
}

export default EachSong