import React, { useEffect, useState } from "react";
import axios from "axios";
import arrowDown from './navbar/img/arrow-down.svg'

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const GetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="left-nav">
    <a onClick={handleGetPlaylists}>
      <h1>Playlist &nbsp; &nbsp; 
        <img src={arrowDown} width="20px" height="20px" alt="arrow-down"/></h1></a>
      { data?.items ? data.items.map((item) => <div className="left-navbar" key={item.id}><a href={item.external_urls.spotify}>{item.name}</a></div>) : null}
    </div>
    </>
  );
};

export default GetPlaylists;