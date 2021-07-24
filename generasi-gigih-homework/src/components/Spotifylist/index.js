import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function Spotifylist() {
  return (
    <div className="Spotifylist">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default Spotifylist;