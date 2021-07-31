import GetPlaylists from '../../GetPlaylist';
import React from 'react';

function Sidebar() {
    return (
        <div className="left-nav">
            <h1>Kalista Playlist</h1>
            <div className="left-navbar"><a className="active" href="#home">
                <img src="./img/house.svg" width="16" height="16" alt="house"/> &nbsp; Home</a></div>
            <div className="left-navbar"><a href="#news">
                <img src="../img/search.svg" width="16" height="16" alt="search"/> &nbsp; Search</a></div>
            <div className="left-navbar"><a href="#contact">
            <img src="../img/music-note-list.svg" width="16" height="16" alt="music-list"/> &nbsp; Create Playlist</a></div>

            <GetPlaylists />
        </div>
    )
}

export default Sidebar;