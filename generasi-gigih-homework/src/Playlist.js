function Playlist() {
  const axios = require("axios")

  // alert("Welcome to track list!");

      axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
      .then(function (response) {

        Object.keys(response).forEach(data => {
          let list = `
          <div class="box">
            <p><img src="${response[data].album.images[0].url}" width="200" height="200" /></p>
            <p><b>Track Title</b></p>
            <p>${response[data].name}</p>
            <p><b>Artist</b></p>
            <p>${response[data].artists[0].name}</p>
            <p><b>Album</b></p>
            <p>${response[data].album.name}</p><br>
            <p><a href="${response[data].album.external_urls.spotify}">Open Spotify Now</a></p>
          </div>
            `;
          document.getElementById("outer").innerHTML += list;
        });

      })
      .catch(function (e) {
        console.log(e)
      });

      return (
        <div>
          <h1>Create Playlist</h1>
          <div class="isi">
          Title <input type="text" /> 
          Description <input type="text" id="desc" /> 
          <button>Submit</button>
          </div>
          <div class="outer" id="outer">
          </div>
        </div>
        
      )
}

export default Playlist;