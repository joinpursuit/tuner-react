import { HelmetProvider, Helmet } from "react-helmet-async";
import SongEdit from "../components/SongEdit";

function Edit() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tunatic | Edit Song</title>
        </Helmet>
      </HelmetProvider>
      <h1>Edit Song</h1>
      <SongEdit />
    </div>
  );
}

export default Edit;
