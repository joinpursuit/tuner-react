import { HelmetProvider, Helmet } from "react-helmet-async";
import Songs from "../components/Songs";

function Index() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tunatic | All Songs</title>
        </Helmet>
      </HelmetProvider>
      <h1>All Songs</h1>
      <Songs />
    </div>
  );
}

export default Index;
