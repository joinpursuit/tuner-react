import { Link } from "react-router-dom";

export default function Navbar(){

    return (
        <div>
            <Link to={"/songs"}>Click here to see all songs</Link>
        </div>
    )
}