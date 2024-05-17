
const catContainer = document.getElementById('cat-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let catDataArr = [];
let api_key = "live_h1zEilC3htrQwMJ1soufLQAeVIBQ5giPo5fUIOtTNXwrmznomGAjDH5LMM9FGKzf"

fetch(`https://api.thecatapi.com/v1/breeds?limit=20?api_key=${api_key}`)
.then(async(res) => {
  const value = await res.json()
  console.log(value);
  // console.log(res.json);
  // return(res.json);
displayCats(value); 
} )
  // .then((data) => {
  //   console.log(data);
  //   catDataArr = data;
    
  // })
  //   .catch((err) => {
  //     catContainer.innerHTML = '<p class="error-msg">There was an error loading the cats</p>';
  // // });
  const fetchMoreCats = () => {
    startingIndex += 8;
    endingIndex += 8;
  
    displayCats(catDataArr.slice(startingIndex, endingIndex));
    if (catDataArr.length <= endingIndex) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.cursor = "not-allowed";
      loadMoreBtn.textContent = 'No more data to load';
    }
  };

  const displayCats = (cats) => {
    cats.forEach((element, index) => {
      console.log(element);
      catContainer.innerHTML += `
      <div id="${index}" class="user-card">
      
      <h2 class="cat-name">${element.name}</h2>
      <div class="gold-divider"></div>
      <p class="description">${element.description}</p>
      <a class="profile-link" href="${element.vcahospitals_url}" target="_blank">${element.name}'s profile page</a>
    </div>
  `}); 
  console.log(cats);
}; 

loadMoreBtn.addEventListener("click", fetchMoreCats);


//here I tried to make all of the descriptions end with an elipsis after a certain point but it did not work.//
// {/* <p class="description">${description.length > 20 ? description.slice(0, 20) + "..." : description}</p> */}

async function catdata() {
const catvariable = await fetch('https://api.thecatapi.com/v1/breeds?limit=20');
const anothervariable = await catvariable.json();
console.log(anothervariable);
}

catdata()