import { Link } from "react-router-dom"

const EachSong = ({song}) => {
    return (
        <tr>
            {/* <p>Imagine a table populating with each song</p> */}
            <td>{song.artist}</td>
            <td>{song.name}</td>
            <td><Link to={`/songs/${song.id}`}>🥁</Link></td>
        </tr>
    )
}

export default EachSong