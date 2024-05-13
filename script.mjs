const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "x-api-key"



const authorContainer = document.getElementById('cat-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let catDataArr = [];

fetch('https://api.thecatapi.com/v1/images/search?limit=10.json')
.then((res) => res.json())
  .then((data) => {
    console.log(data);   
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

  const displayCats = (cats) => {
    cats.forEach(({ cats, image, url, breed }, index) => {
       
  });
}; 