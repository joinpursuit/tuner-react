import './New.css';

import NewForm from "../Components/NewForm";

const New = () => {
  return (
    <div className="New">
      <div className='container pt-3'>
        <h2 className='pt-3 pb-3'>Add to My Collections</h2>
        <NewForm />
      </div>
    </div>
  );
}

export default New;
