import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const ShowSong = () => {
    const URL = process.env.REACT_APP_API_URL
    const { id } = useParams()
    const navigate = useNavigate()

    const [ song, setSong ] = useState({})

    useEffect(() => {
        axios
        .get(`${URL}/songs/${id}`)
        .then((response) => setSong(response.data))
        .catch((error) => console.log(error))
    }, [URL, id])

    const handleDelete = (event) => {
        axios
        .delete(`${URL}/songs/${id}`)
        .then(() => navigate("/songs"))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            {/* <p>Look at all the details for this one song</p> */}
            <p>{song.id}</p>
            <p>{song.name}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.time}</p>
            <p>{song.is_favorite}</p>
            <Link to={`/songs/${id}/edit`}><button>edit</button></Link>
            <Link to={"/songs"}><button>back</button></Link>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default ShowSong