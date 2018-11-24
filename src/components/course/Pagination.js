import React from 'react';

const Pagination = ({ coursesPerPage, currentPage, coursesNumber }) => {
  const numberOfPages = Math.ceil(coursesNumber / coursesPerPage);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link">Previous</a>
          {
            Array(numberOfPages).fill('').map((x, i) => {
              return <a href="#" className="page-link" key={i}>{i}</a>;
            })
          }
          <a href="#" className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;