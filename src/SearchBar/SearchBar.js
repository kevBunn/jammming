import React, { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar () {
    const [searchData, setSearchData] = useState('');

    return (
        <form>
            <input
              id='searchData'
              name='searchData'
              type='text'
              onChange={(e) => setSearchData(e.target.value)} //not defined yet
            />
            <button>Search</button>
         </form>
    );
}

export default SearchBar;