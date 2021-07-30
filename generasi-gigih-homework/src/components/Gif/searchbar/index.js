import React, { useState } from 'react';

const Searchbar = () => {
    const [textInput, setTextInput] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        setTextInput(e.target.value);
    }

    return (
        <div>
            <form onChange={handleForm}>
            <input type="text" value={textInput} />
            <button>Search</button>
            </form>
        </div>
    )
}
export default Searchbar;