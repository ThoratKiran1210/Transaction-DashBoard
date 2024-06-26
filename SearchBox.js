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
