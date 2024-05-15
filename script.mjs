
const catContainer = document.getElementById('cat-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let catDataArr = [];

fetch('https://api.thecatapi.com/v1/breeds?limit=20')
.then((res) => res.json())
  .then((data) => {
    catDataArr = data;
    displayCats(catDataArr.slice(startingIndex, endingIndex)); 
  })
    .catch((err) => {
      catContainer.innerHTML = '<p class="error-msg">There was an error loading the cats</p>';
  });
  const fetchMoreCats = () => {
    startingIndex += 8;
    endingIndex += 8;
  
    displayCats(catDataArr.slice(startingIndex, endingIndex));
    if (catDataArr.length <= endingIndex) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'No more data to load';
    }
  };

  const displayCats = (cats) => {
    cats.forEach(({ cats, image, url, breed }, index) => {
      catContainer.innerHTML += `
      <div id="${index}" class="user-card">
      
      <h2 class="author-name">${cats}</h2>
      <img class="user-img" src="${image}" alt="${cats} avatar" />
      <div class="purple-divider"></div>
      <p class="breed">${breed}</p>
      <a class="author-link" href="${url}" target="_blank">${cats}'s author page</a>
    </div>
  `;
  });
}; 
loadMoreBtn.addEventListener("click", fetchMoreCats);

// {/* <p class="breed">${breed.length > 20 ? breed.slice(0, 20) + "..." : breed}</p> */}