import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar () {
    const [searchData, setSearchData] = useState('');

    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          id='searchData'
          name='searchData'
          type='text'
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button>Search</button>
      </form>
    );
}

export default SearchBar;