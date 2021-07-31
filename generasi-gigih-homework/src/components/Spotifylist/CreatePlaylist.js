import React, { useEffect, useState } from "react";
import axios from "axios";

const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

const CreatePlaylists = () => {

  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value)
}

const handleDesc = (event) => {
  setDesc(event.target.value)
}
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
        // console.log(response.data.href);
        axios("https://api.spotify.com/v1/users/"+response.data.id+"/playlists", {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          },
            data: {
              name: title,
              description: desc,
              public: false
            }
          })
          .then(response => {
            // setList(response);
            // console.log(response);
            axios("https://api.spotify.com/v1/playlists/"+response.data.id+"/tracks", {
            method: 'POST',
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json"
            },     
            "uris":"spotify:track:0pYacDCZuRhcrwGUA5nTBe",       
            })
            .then((response) => {
              // setList(response);
              console.log(response);
              
            })
            .catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="wrap3">
        <h2>Create Playlist</h2>
        <input type="text" onChange={handleTitle} placeholder="Title"/>
        <input type="text" id="desc" onChange={handleDesc} placeholder="Description"/>
        <button onClick={GetProfile}>Submit</button>
    </div>
    </>
  );
};

export default CreatePlaylists;