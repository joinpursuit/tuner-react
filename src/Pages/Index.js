import './Index.css';

import Songs from "../Components/Songs";

const Index = ({parentCallBack}) => {
  return (
    <div className="Index">
      <div className='pt-3'>
        <h2 className='pt-3 pb-3'>Most Played Radio</h2>
        <Songs parentCallBack={parentCallBack}/>
      </div>
    </div>
  );
}

export default Index;
