import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchTrack = () => {
  const[search, setSearch] = useState('')
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/search?query=${search}&type=album`;

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
        setData(response.data.albums.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="wrap3">
      Search, the track you wanna hear:
      <br></br>
        <input type="text" id="search" placeholder="Enter the keyword that you want to search" value={search} onChange={handleSearch} />
        <button onClick={handleGetPlaylists}>Search</button><br></br>
      </div>
      
      {data.map(item => {
          return (
            <div class="box">
              <a target="_blank" href={item.external_urls.spotify} rel="noopener noreferrer" className="card-image-link">
                <img src={item.images[0].url} alt="" width="200" height="200"/></a>   
              <p><b>{item.name}</b></p>
              <small>{item.artists.map((artist) => artist.name).join(', ')}</small>
              <p><input type="button" value="Select" onClick={saveAndContinue}/></p>
            </div>
          )
      })}
                  
    </>
  );
};

export default SearchTrack;