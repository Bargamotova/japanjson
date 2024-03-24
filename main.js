const apiMusicUrl = 'https://bargamotova.github.io/japanjson/music.json';
const songs = [];

fetch(apiMusicUrl)
  .then((res) => res.json())
  .then((data) => {
    songs.push(data);
    console.log(...songs)
  })
