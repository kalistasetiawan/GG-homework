 function getValue() {
      alert("Welcome to track list!");

      axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
      .then(function (response) {
        let title = response.data.name;
        let artist = response.data.artists[0].name;
        let album = response.data.album.name;

        document.getElementById('title').append(title);
        document.getElementById('artist').append(artist);
        document.getElementById('album').append(album);
      })
      .catch(function (e) {
        console.log(e)
      });
    }
    
