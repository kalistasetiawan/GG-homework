import React, { useEffect } from 'react';
import SearchTrack from './SearchTrack';
import Sidebar from './navbar/sidebar';
import Nav from './navbar/nav';
import CreatePlaylists from './CreatePlaylist';

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    // console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};  

const Redirect = () => {

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });
  
      return (
        <>
        <Sidebar />
        <Nav />
        <div className="wrap">
        <SearchTrack />
        <CreatePlaylists />
        </div> 
        </>       
      );
    };

export default Redirect;