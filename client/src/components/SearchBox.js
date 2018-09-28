import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={event => onSearchChange(event)}
      />
    </div>
  );
};

export default SearchBox;
