import './Show.css';

import Details from "../Components/Details";

const Show = () => {
  return (
    <div className="Show">
      <div className='container pt-3'>
        <h2 className='pt-3 pb-3' >Song Details</h2>
        <Details />
      </div>
    </div>
  );
}

export default Show;
