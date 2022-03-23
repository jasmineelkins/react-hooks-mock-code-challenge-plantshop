import React from "react";

function Search({ searchText, setSearchText, searchForPlant }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          setSearchText(e.target.value);
          searchForPlant(searchText);
        }}
        value={searchText}
      />
    </div>
  );
}

export default Search;
