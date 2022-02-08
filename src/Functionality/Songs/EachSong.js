import { Link } from "react-router-dom"
const EachSong = () => {
    return (
        <div>
            <p>Imagine a table populating with each song</p>
            <Link to="/songs/:id">Artist Name</Link>
        </div>
    )
}

export default EachSong