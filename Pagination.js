// import React from "react";

// const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
//   return (
//     <div>
//       <button
//         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       <span>
//         Page {currentPage} of {totalPages}
//       </span>
//       <button
//         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;



// src/components/Pagination.js
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page No: {currentPage}</span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
