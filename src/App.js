import logo from './logo.svg';
import './App.css';

//import React from 'react';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <button>Save To Spotify</button>
         <SearchBar />
        </p>
      </header>
    </div>
  );
}

export default App;
