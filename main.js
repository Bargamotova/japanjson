const apiTopicsUrl = 'https://bargamotova.github.io/japanjson/topics.json';
const topics = [];

fetch(apiTopicsUrl)
  .then((res) => res.json())
  .then((data) => {
    topics.push(data);
    console.log(...topics)
  })
