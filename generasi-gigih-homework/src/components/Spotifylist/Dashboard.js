import React, { useEffect, useState } from 'react';
import useAuth from './auth/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

// const spotifyApi = new SpotifyWebApi({
//     clientId: "886f74a87d5649a78165b070b0328a76",
// });

const Dashboard = ({ code }, props) => {
    const accessToken = useAuth(code);
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            setErrorMsg('');
            props.handleSearch(searchTerm);
        } else {
            setErrorMsg('Please enter a keyword!');
        }
    }

    useEffect(() => {
        if (!accessToken) return;

        axios(`https://api.spotify.com/v1/search?query${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`,{
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + [accessToken]
        }
    }).then(trackresponse=> {
        console.log(trackresponse);
    }).catch(error=> console.log(error));
    })

    // useEffect(() => {
    //     if (!accessToken) return;
    
    //     // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    //     spotifyApi.setAccessToken(accessToken);
    
    //     // Get user details with help of getMe() function
    //     spotifyApi.getMe().then(data => {
    //       console.log(data);
    //     })
    //   }, [accessToken])
    
      return (
        <div>
        {/* {code} */}
        <div>
            <form onSubmit={handleSearch}>
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <input type="search" name="searchTerm" value={searchTerm} placeholder="Enter the keyword that you want to search" onChange={handleInputChange} />
                <button>Search</button>
            </form>
        </div>        
        </div>
      );
    };

export default Dashboard;