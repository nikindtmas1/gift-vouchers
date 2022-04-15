import React from 'react'

const Search = () => {
  return (
    <form action="/cubics" method="GET">
      <input type="text" class="search" name="search" placeholder="Search..." />
      <input
        type="number"
        name="from"
        class="difficulty"
        placeholder="Difficulty from..."
      />
      <span>-</span>
      <input
        type="number"
        name="to"
        class="difficulty"
        placeholder="Difficulty to..."
      />
      <input type="submit" value="search" />
    </form>
  );
}

export default Search