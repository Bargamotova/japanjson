const apiUrl = 'https://bargamotova.github.io/japanjson/data.json';
const topics = [];

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    topics.push(data.topics);
    console.log(...topics)
  })
