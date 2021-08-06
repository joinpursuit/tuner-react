import { Link } from 'react-router-dom'

const SongListItem = ({song})  => {

return (
    
    <tr>
        <td>
           <Link to={`/songs/${song.id}`}>{song.name}</Link>
         
        </td>
        <td>
            {song.artist}
        </td>
        <td>
            {song.album}
        </td>
        <td>
            {song.time}
        </td>
        <td>
            {song.is_favorite ? <span>❤️</span> : null}
        </td>
    </tr>
)
}

export default SongListItem