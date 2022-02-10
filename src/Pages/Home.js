import './Home.css';

import { Link } from "react-router-dom"

import Radio from "../assets/Radio.png" 

const Home = () => {
 
    return (
      <div className="Home">
        <div className=''>
          <h1>Welcome, Cindy! </h1>
          <Link to={`/songs`}>
            <img className="radio" alt="radio" src={Radio}/>
          </Link>          
          <h1>Fine tune your station</h1>
        </div>
      </div>
    );
  }
  
  export default Home;
  