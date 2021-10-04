import React, { useState } from 'react'

function Search({ onSearchSubmit}) {
  const [searchBox, setSearchBox]  = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchBox)
    setSearchBox('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBox}
        onChange={(e) => setSearchBox(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
