const apiMusicUrl = 'https://bargamotova.github.io/japanjson/data/music.json';
const songs = [];

fetch(apiMusicUrl)
  .then((res) => res.json())
  .then((data) => {
    songs.push(...data);
    const first = songs[1]
    console.log(first.title)
    console.log(songs)
  })
const apiCitiesUrl = 'https://bargamotova.github.io/japanjson/data/cities.json';
const cities = [];

fetch(apiCitiesUrl)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
    const first = cities[1]
    console.log(first.title)
    console.log(cities)
  })
