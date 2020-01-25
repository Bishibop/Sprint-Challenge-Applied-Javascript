// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsUrl = 'https://lambda-times-backend.herokuapp.com/articles';
let cardsEl = document.querySelector('.cards-container');

axios.get(cardsUrl).then(res => {
  let articleTopics = res.data.articles;
  Object.values(articleTopics).forEach(topic => {
    topic.forEach(article => {
      cardsEl.appendChild(buildCard(article));
    });
  });
});

function buildCard(cardDatum) {
  let cardEl = document.createElement('div');
  cardEl.classList.add('card');

  let headlineEl = document.createElement('div');
  headlineEl.classList.add('headline');
  headlineEl.textContent = cardDatum.headline;

  let authorEl = document.createElement('div');
  authorEl.classList.add('author');

  let imgContainerEl = document.createElement('div');
  imgContainerEl.classList.add('img-container');

  let imgEl = document.createElement('img');
  imgEl.src = cardDatum.authorPhoto;

  let authorNameEl = document.createElement('span');
  authorNameEl.textContent = `By ${cardDatum.authorName}`;

  imgContainerEl.appendChild(imgEl);
  authorEl.appendChild(imgContainerEl);
  authorEl.appendChild(authorNameEl);
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);

  return cardEl;
}
