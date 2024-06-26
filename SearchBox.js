// import React from "react";

// const SearchBox = ({ searchQuery, setSearchQuery }) => {
//   return (
//     <input
//       type="text"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       placeholder="Search transactions..."
//     />
//   );
// };

// export default SearchBox;


// src/components/SearchBox.js
import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search transaction"
      className="search-box"
    />
  );
};

export default SearchBox;
