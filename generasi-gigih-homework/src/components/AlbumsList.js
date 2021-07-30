import React from 'react';
import _ from 'lodash';

const AlbumsList = ({ albums }) => {

  const saveAndContinue = (e) => {
    e.preventDefault();
    if (e.target.value == "Select"){
      e.target.value = "Deselect";
    } else {
      e.target.value = "Select";
    }
    // return e.target.value ? "Select" : "Deselect"; 
  }

  return (

    // This binding is necessary to make `this` work in the callback

    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <div class="box">
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <img
                        src={album.images[0].url}
                        alt="" width="200" height="200"
                      />
                    ) : (
                      <p>Gambar Tidak tersedia</p>
                    )}
                  </a>
                  <p><b>{album.name}</b></p>
                    <small>{album.artists.map((artist) => artist.name).join(', ')}</small>
                    <p><input type="button" value="Select" onClick={saveAndContinue} /></p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default AlbumsList;