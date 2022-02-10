import { Link } from "react-router-dom";

const Format = ({ song }) => {

  return (
      <tr className="song rounded mb-3">
          <td className="row">
            <Link className="list-group-item list-group-item-action" to={`/songs/${song.id}`}>
              <span 
                className="col-1 float-start p-2 text-nowrap text-white mt-1" 
                style={{overflowX: "scroll"}}>
                  {song.is_favorite ? "❤️" : "🤍"}
              </span>
              <span 
                className="col-5 bg-outline-secondary text-dark text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
                style={{overflowX: "scroll"}}>
                  {song.name}
              </span> 
              <span 
                className="col-2 bg-outline-secondary text-dark text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
                style={{overflowX: "scroll"}}>
                  {song.artist}
              </span>
              <span
                className="col-auto bg-outline-secondary text-dark text-nowrap d-inline-flex justify-content-center ms-2 me-2" 
                style={{overflowX: "scroll"}}>
                  {song.time}
              </span>
            </Link>
          </td>
      </tr>
  );
}

export default Format;
