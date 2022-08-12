import { HelmetProvider, Helmet } from "react-helmet-async";
import SongNew from "../components/SongNew";

function New() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tunatic | Add Song</title>
        </Helmet>
      </HelmetProvider>
      <h1>Add Song</h1>
      <SongNew />
    </div>
  );
}

export default New;
