import React, { useState, useEffect } from 'react';
import axios from "axios";
import arrowLeft from '../img/arrow-left-circle-fill.svg';

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
      <div className="nav">
        <div className="navbar">
          <a onClick={handleGetPlaylists}>
            <img src={arrowLeft} width="20px" height="20px" alt="arrow-left"/></a>
        </div>
        {data && data.map(item => {
          return (
            <div className="navbar" key={item.id}>
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