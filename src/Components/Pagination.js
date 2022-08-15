import React from 'react';

const Pagination = ({ songsPerPage, totalSongs, paginate,nextPage, prevPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      <li className="page-item">
                        <button className="page-link" href="#" onClick={() => prevPage()}>Previous</button>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <button onClick={() => paginate(num)} href="!#" className="page-link">{num}</button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" href="!#" onClick={() => nextPage()}>Next</button>
                    </li>
        {/* {pageNumbers.map((number) => ( 
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
          
        ))}  */}
      </ul>
    </nav>
  );
};

export default Pagination;
