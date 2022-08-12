import { HelmetProvider, Helmet } from "react-helmet-async";
import SongDetails from "../components/SongDetails";

function Show() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tunatic | Song Details</title>
        </Helmet>
      </HelmetProvider>
      <h1>Song Details</h1>
      <SongDetails />
    </div>
  );
}

export default Show;
