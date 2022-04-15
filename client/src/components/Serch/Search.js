import React from 'react'

const Search = () => {
  return (
    <form action="" method="GET">
      <input type="text" className="search" name="search" placeholder="Search..." />
      <input
        type="number"
        name="from"
        className="difficulty"
        placeholder="Difficulty from..."
      />
      <span>-</span>
      <input
        type="number"
        name="to"
        className="difficulty"
        placeholder="Difficulty to..."
      />
      <input type="submit" value="search" />
    </form>
  );
}

export default Search