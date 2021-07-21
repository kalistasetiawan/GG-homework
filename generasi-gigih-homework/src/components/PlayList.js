import React from 'react';
import _ from 'lodash';

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div class="box">
                  <a
                    target="_blank"
                    href={item.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(item.images) ? (
                      <img
                        src={item.images[0].url}
                        alt=""
                      />
                    ) : (
                      <p>Gambar Tidak tersedia</p>
                    )}
                  </a>
                  <p>{item.name}</p>
                  <small>By {item.owner.display_name}</small>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
      </div>
  );
};
export default PlayList;