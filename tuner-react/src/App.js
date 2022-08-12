import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Songs from './Components/Songs';
import SongDeets from './Components/SongDeets';
import SongEdit from './Components/SongEdit';
import SongNew from './Components/SongNew';
import Home from './Components/Home';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/songs' element={<Songs />}></Route>
				<Route path='/songs/:id' element={<SongDeets />}></Route>
				<Route path='/songs/new' element={<SongNew />}></Route>
				<Route path='/songs/:id/edit' element={<SongEdit />}></Route>
			</Routes>
		</div>
	);
}

export default App;
