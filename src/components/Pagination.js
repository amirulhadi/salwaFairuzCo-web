import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  console.log('totalpost: ', totalPosts)
  console.log('postsperoage: ', postsPerPage)
 

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    console.log('pagenumber: ', i)
    pageNumbers.push(i);
    
  }

  console.log('sini')

  return (
    <nav className="d-flex">
      <ul className='pagination list-inline mx-auto justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item list-inline-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;