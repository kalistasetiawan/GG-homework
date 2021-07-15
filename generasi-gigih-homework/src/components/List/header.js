function header() {
    return (
        <div className="Header">
            <h1>Create Playlist</h1>
            <div class="isi">
            Title <input type="text" /> 
            Description <input type="text" id="desc" /> 
            <button>Submit</button>
            </div>
        </div>
    )
}

export default header;