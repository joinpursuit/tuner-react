import Songs from "../Components/Songs";

const Index = ({parentCallBack}) => {
  return (
    <div className="Index container p-5 my-5 bg-dark text-white text-center rounded">
      <h2>My Collections</h2>
      <Songs parentCallBack={parentCallBack}/>
    </div>
  );
}

export default Index;
