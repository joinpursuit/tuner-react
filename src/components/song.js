import { Link } from 'react-router-dom';
function Song({ song, id }) {
  return (
    <table className='SongTable'>
      <thread>
        <tr>
          <th scope='col'>Fav</th>
          <th scope='col'>Song</th>
          <th scope='col'>Artist</th>
          <th scope='col'>Time</th>
        </tr>
      </thread>
      <tr id='songTR'>
        <td>
          <Link to={`/songs/${song.id}`} id='favTD'>
            {song.is_favorite ? `🌟` : null}
          </Link>
        </td>
        <td>
          <Link to={`/songs/${song.id}`} id='nameTD'>
            {song.name}
          </Link>
        </td>
        <td>
          <Link to={`/songs/${song.id}`} h2 id='artistTD'>
            {song.artist}
          </Link>
        </td>
        <td>
          <Link to={`/songs/${id}`} id='timeTD'>
            {song.time}
          </Link>
        </td>
      </tr>
    </table>
  );
}
export default Song;
