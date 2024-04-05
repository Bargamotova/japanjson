// const apiMusicUrl = 'https://bargamotova.github.io/japanjson/data/music.json';
// const songs = [];

// fetch(apiMusicUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     songs.push(...data);
//     const first = songs[1]
//     // console.log(first.title)
//     // console.log(songs)
//   })
// const apiCitiesUrl = 'https://bargamotova.github.io/japanjson/data/cities.json';
// const cities = [];

// fetch(apiCitiesUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     cities.push(...data);
//     const first = cities[1]
//     // console.log(first.title)
//     // console.log(cities)
//   })

const apiUrl = 'https://bargamotova.github.io/japanjson/data/data.json';
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    [cities, pic, music] = data;

    const top = pic.topics; // {topics: [...] => [...]}
    //console.log(top[0]);
    top[0].dishes.map(el => console.log(el.title));

    // console.log(top[3].name)

    top.map((el, i) => {
      console.log(el.name, i)
    });

    let curEl = top.find((el, i) => el.id == 1);
    //console.log(curEl.title || null);
    let curEl2 = top.findIndex((el, _) => el.title === "Secret world of Ninja");
    //console.log(curEl2);
  })
