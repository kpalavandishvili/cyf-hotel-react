import React from "react";

const SearchButton = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;
