import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
// import _ from 'lodash';
import Table from 'react-bootstrap/Table';
const API = process.env.REACT_APP_API_URL;
// const pageSize=4;

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [fave, setFave] = useState(false);
  // const [paginatedSongs, setPaginatedSongs] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(4);

  useEffect(() => {
    axios
      .get(`${API}/api/songs`)
      .then((res) => {
        setSongs(res.data.payload);
        console.log(songs);
        
      })
      .catch((e) => console.error('catch', e));
  }, []);

 
  // Get current posts
  const indexOfLastSong = currentPage * songsPerPage;
  console.log(indexOfLastSong);
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  console.log(indexOfFirstSong);
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  console.log(currentSongs);

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage( currentPage + 1 );

  const prevPage = () => setCurrentPage( currentPage - 1 );

  return (
    <div>
    <section >
    
      <Table
        className='table-container'
        stripped='true'
        bordered
        hover
        responsive='sm'
      >
        <thead>
          <tr className='green'>
            <th>Favorite</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {console.log(songs)}
          {currentSongs.map((song) => {
            return (
              <tr className='Song Songs' key={song.id}>
                <td>
                  {song.is_favorite ? (
                    <span>&#11088;</span>
                  ) : (
                    <span>
                      &#10060;
                      {/* &nbsp; &nbsp; &nbsp; */}
                    </span>
                  )}
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.name}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.artist}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.album}
                  </Link>
                </td>
                <td>{(song.time / 60).toFixed(2).replace('.', ':')}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
   
     
      <Pagination
        songsPerPage={songsPerPage}
        totalSongs={songs.length}
        paginate={paginate} 
        nextPage={nextPage} 
        prevPage={prevPage}
      />
     </section>
     </div>
  );
};

export default Songs;
