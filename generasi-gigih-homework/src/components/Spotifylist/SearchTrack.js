import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchTrack = () => {
  const[search, setSearch] = useState('')
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/search?query=${search}&type=album`;

  const handleSearch = (event) => {
    setSearch(event.target.value)
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
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <input type="text" id="search" placeholder="Enter the keyword that you want to search" value={search} onChange={handleSearch} />
      <button onClick={handleGetPlaylists}>Search</button><br></br>
          
            {data?.items ? data.items.map((item) => <div class="box"><a target="_blank" href={item.external_urls.spotify}
rel="noopener noreferrer" className="card-image-link"><img src={item.images[0].url} title={item.name} width="200" height="200" /><p><b>{item.name}</b></p><small>{item.artists.map((artist) => artist.name).join(', ')}</small></a></div>) : null}
    </>
  );
};

export default SearchTrack;