import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="NavBar">
      Nav Bar
      <Link to="/new">
        <button>New</button>
      </Link>
    </div>
  );
};
export default NavBar;
