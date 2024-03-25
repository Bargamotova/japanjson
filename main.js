const apiMusicUrl = 'https://bargamotova.github.io/japanjson/music.json';
const songs = [];

fetch(apiMusicUrl)
  .then((res) => res.json())
  .then((data) => {
    songs.push(data);

    const one = songs.find(el => el.id === 1)
    console.log(...songs);
    console.log(one)
  })
