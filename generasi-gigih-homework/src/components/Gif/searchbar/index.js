import React, { useState } from 'react';
import SearchComponent from '../../Gif';

const Searchbar = () => {
    const [textInput, setTextInput] = useState([]);

    const [query, setQuery] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        setTextInput(e.target.value);
    }

    return (
        <div>
            <form onChange={handleForm}>
            <input type="text" value={textInput} onChange={handleChange} />
            <button onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}
export default Searchbar;