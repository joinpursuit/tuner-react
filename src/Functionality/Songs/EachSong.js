import { Link } from "react-router-dom"

const EachSong = ({song, index}) => {
    return (
        <tr>
            <td>{song.artist}</td>
            <td>{song.name}</td>
            <td><Link to={`/songs/${index}`}>🥁</Link></td>
        </tr>
    )
}

export default EachSong