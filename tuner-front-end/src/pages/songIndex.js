import songs from "./components/songs";

const songIndex = ({ songs }) => {
  return (
    <div>
      <h2>Song Index</h2>
      <Songs songs={songs} />
    </div>
  );
};

export default songIndex;
