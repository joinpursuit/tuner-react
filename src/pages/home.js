import { Link } from 'react-router-dom';
import './home.css';
function Home() {
  return (
    <div className='Home'>
      <h1> Welcome to the Tuner App</h1>
      <Link to={`/songs`}> Click me for a list of songs!</Link>
    </div>
  );
}
export default Home;
