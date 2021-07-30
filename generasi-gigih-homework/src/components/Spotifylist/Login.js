import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const space_delimiter = "%20";
  
  const SCOPES = [
    "playlist-read-private",
    "playlist-modify-private",
    "user-read-private",
  ];
  
  const SCOPES_URL_PARAM = SCOPES.join(space_delimiter);

const Login = () => {

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    // const { isValidSession, location } = props;
    // const { state } = location;
    // const sessionExpired = state && state.session_expired;
    
    return (
        <React.Fragment>
        <div className="login" class="wrap2">
          <h1>Kalista Playlist</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
    </React.Fragment>
    )
}

export default Login;