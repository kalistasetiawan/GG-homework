import React from 'react';
// import logo from './logo.svg';
// import Gifs from './components/Gif';
import './App.css';
import Playlist from './components/Playlist';
import Header from './components/List/header';
// import List from './components/List';

function App() {

  return (
    <div className="App">
        {/* <h1>Search Giphy</h1>
        <input type="text" />
        <button id="searchbar">Search</button>
        <br></br><br></br>
        <div class="box">
        <Gifs /> 
        </div> */}
        <Header />
        <div class="outer" id="outer">
        {<Playlist />}
       </div>
    </div>
  );
}

export default App;
