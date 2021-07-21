import React, { useState } from 'react';

const SearchForm = (props) => {
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
    return (
        <div>
            <form onSubmit={handleSearch}>
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <input type="search" name="searchTerm" value={searchTerm} placeholder="Enter the keyword that you want to search" onChange={handleInputChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;