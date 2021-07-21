import React from 'react';
import _ from 'lodash';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <div class="box">
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <img
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <p>Gambar Tidak tersedia</p>
                    )}
                  </a>
                  <p>{artist.name}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default ArtistsList;