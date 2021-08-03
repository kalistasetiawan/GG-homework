import GetPlaylist from '../../GetPlaylist';
import houseIcon from '../img/house.svg';
import searchIcon from '../img/search.svg';
import musicIcon from '../img/music-note-list.svg';
import React from 'react';

function Sidebar() {
    return (
        <div className="left-nav">
            <h1>Kalista Playlist</h1>
            <div className="left-navbar"><a className="active" href="#home">
                <img src={houseIcon} width="16" height="16" alt="house"/> &nbsp; Home</a></div>
            <div className="left-navbar"><a href="#news">
                <img src={searchIcon} width="16" height="16" alt="search"/> &nbsp; Search</a></div>
            <div className="left-navbar"><a href="#contact">
            <img src={musicIcon} width="16" height="16" alt="music-list"/> &nbsp; Create Playlist</a></div>

            <GetPlaylist />
        </div>
    )
}

export default Sidebar;