import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMsg = () => {
  return (
    <div className="ErrorMsg">
      <h1>404 Page Not Found</h1>
      <Link to="/songs">
        <button className="btn btn-dark">Back</button>
      </Link>
    </div>
  );
};

export default ErrorMsg;
