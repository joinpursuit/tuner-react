import { HelmetProvider, Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tunatic | Home</title>
        </Helmet>
      </HelmetProvider>
      <h1>Welcome to Tunatic!</h1>
      <h2>Get crazy about your music.</h2>
      <a href="/songs">
        <img alt="icon" src="icon.png" />
      </a>
    </div>
  );
}

export default Home;
