import React, { useState, useEffect } from 'react';
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me";

const Nav = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

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
      .then(response => {
        setData(response.data.images);
        setName(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class="nav">
        <div class="navbar">
          <a href="" onClick={handleGetPlaylists}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" /></svg></a>
        </div>
        {data && data.map(item => {
          return (
            <div class="navbar">
              <img src={item.url} width="40px" height="40px" alt="" /><span>{name.display_name}</span>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Nav;