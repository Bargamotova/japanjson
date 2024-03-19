const apiUrl = 'https://bargamotova.github.io/japanjson/data.json';
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => console.log(data.cities))
