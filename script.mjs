
const catContainer = document.getElementById('cat-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let catDataArr = [];

fetch('https://api.thecatapi.com/v1/breeds?limit=10')
.then((res) => res.json())
  .then((data) => {
    catDataArr = data;
    displayCats(catDataArr.slice(startingIndex, endingIndex)); 
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

  const displayCats = (cats) => {
    cats.forEach(({ cats, image, url, breed }, index) => {
      catContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="cat-name">${cats}</h2>
        
<img class="user-img" src="${image}" alt="${cats} avatar"/>
      </div>
    `;  
  });
}; 

