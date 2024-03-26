const apiUrl = 'https://bargamotova.github.io/japanjson/data';
const data = [];

fetch(apiUrl)
  .then((res) => res.json())
  .then((res) => {
    data.push(res);



  })
