import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const axios = require("axios")

    // const {
    //   REACT_APP_CLIENT_ID,
    //   REACT_APP_REDIRECT_URL
    // } = process.env;

  axios.get(`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (e) {
    console.log(e)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
