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
    <nav>
      <ul className='flex justify-end'>
        {pageNumbers.map(number => (
          <li key={number} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;