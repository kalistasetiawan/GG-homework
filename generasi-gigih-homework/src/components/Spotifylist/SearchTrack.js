import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchTrack = () => {
  const[search, setSearch] = useState('')
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [uri, setUri] = useState('');

  const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/search?query=${search}&type=track`;

  const handleSearch = (event) => {
    setSearch(event.target.value)
}

const saveAndContinue = (e) => {
  e.preventDefault();
  if (e.target.value == "Select"){
    e.target.value = "Deselect";
  } else {
    e.target.value = "Select";
  }
  console.log(e.target.id);
  // return e.target.value ? "Select" : "Deselect"; 
}

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
        setData(response.data.tracks.items);
        setUri(response.data.tracks.items.uri);
        console.log(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrap3">
      Search, the track you wanna hear:
      <br></br>
        <input type="text" id="search" placeholder="Enter the keyword that you want to search" value={search} onChange={handleSearch} />
        <button onClick={handleGetPlaylists}>Search</button><br></br>
      </div>
      <div className="outer">
      {data.map(item => {
          return (
            <div className="box" key={item.id}>
              <a target="_blank" href={item.external_urls.spotify} rel="noopener noreferrer">
                <img src={item.album.images[0].url} alt="" width="200" height="200"/></a>
              <p><b>{item.name}</b><br></br>
              By {item.album.artists.map((artist) => artist.name).join(', ')}</p>
              <br></br>
              <input type="button" id={uri} value="Select" onClick={saveAndContinue}/>
            </div>
          )
      })}
      </div>          
    </>
  );
};

export default SearchTrack;