import React, { useEffect, useState } from "react";
import axios from "axios";
import GetPlaylists from "./GetPlaylist";

const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

const CreatePlaylists = () => {
// const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/users/${userID}/playlists`;
  const [token, setToken] = useState("");
  const [userid, setData] = useState([]);
//   const userID = useState('');

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const GetProfile = () => {
    axios
      .get(PROFILE_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        },
      })
      .then(response => {
        setData(response.data.id);
        // console.log(response.data.href);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetPlaylists = () => {
    axios
      .post(`https://api.spotify.com/v1/users/${userid}/playlists`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        body: {
            name: "New Playlist",
            description: "New playlist description",
            public: false
        },
      })
      .then(response => {
        // setList(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   const handleGetPlaylists = (userid, token) => {
//         return fetch(`${userid}/playlists`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + token,
//             },
//             body: JSON.stringify({
//                 name: "coba",
//                 public: false,
//                 collaboration: false,
//                 description: "cobaduluyah",
//             })
//         }).then((res) => res.json());
//   };

  return (
    <>
    <div class="wrap3" className="CreatePlaylist">
        <h2>Create Playlist</h2>
        <input type="text" placeholder="Title"/>
        <input type="text" id="desc" placeholder="Description"/>
        <button onClick={GetProfile}>Get Id</button>
        <button onClick={handleGetPlaylists}>Submit</button>
    </div>
    {/* <button onClick={handleGetPlaylists}>Create New Playlist</button> */}
    </>
  );
};

export default CreatePlaylists;