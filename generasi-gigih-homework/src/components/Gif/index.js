// import gif from './gif';
// import gifs from './gifs';
import {Component, useState} from 'react';
import axios from 'axios';

const SearchComponent = () => {
    const[search, setSearch] = useState('')
    const[result, setResult] = useState([])

    const getText = () => {
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_CODE}&q=${search}&limit=9`)
        .then(response => {
            console.log(response)
            setResult(response.data.data)
        })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" id="search_bar" onChange={handleSearch} />
            <button onClick={getText}>Search</button><br></br>
            {result.map(gif => (
                <div class="box">
                <img src={gif.images.original.url} title={gif.title} width="200" height="200" />
                </div>
            ))}
        </div>
    )
}

export default SearchComponent;