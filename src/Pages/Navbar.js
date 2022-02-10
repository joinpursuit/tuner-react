import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img alt="music player logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9845/9845545_sa.jpg" width="200" height="100" />
            </Link>
            <aside>
            <Link to="/songs"><button>All Songs</button></Link>
            <Link to="/songs/new"><button>Add New Song</button></Link>
            </aside>
        </div>
    )
}

export default Navbar