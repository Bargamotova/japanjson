const apiUrl = 'https://bargamotova.github.io/japanjson/cities/';
const data = [];

fetch(apiUrl)
  .then((res) => res.json())
  .then((res) => {
    console.log(...res)



  })
