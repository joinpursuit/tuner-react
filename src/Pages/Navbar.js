import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/songs"><button>Index Page</button></Link>
            <Link to="/songs/new"><button>New Page</button></Link>
        </div>
    )
}

export default Navbar