// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// const { default: Axios } = require("axios");

// IMPORT
import axios from 'axios';

// Find container to the cards
const cardContainer = document.querySelector('div.cards-container');

// Axios GET
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const bootstrap = response.data["articles"].bootstrap;
        const javascript = response.data["articles"].javascript;
        const jquery = response.data["articles"].jquery;
        const node = response.data["articles"].node;
        const technology = response.data["articles"].technology;

        // Creating a new array that contains the articles for all topics
        const allArticles = bootstrap.concat(javascript, jquery, node, technology);

        // Appending the cards to the DOM with article data from the allArticles array
        appendCards(allArticles);
    })
    .catch(err => {
        const errorsContainer = document.querySelector('div.errors-container');
        const newErrorModal = errorModalMaker(err);
        errorsContainer.append(newErrorModal);
    });

// This function creates cards using the cardMaker component and then appends them to the DOM with data from an array of articles objects.
function appendCards(articles) {
    articles.forEach(article => {
        const newCard = cardMaker(article);
        cardContainer.append(newCard);
    });
}

// Component
function cardMaker(article) {
    // Set up element
    const card = document.createElement('div');
    card.classList.add('card');

    // Set up child elements
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article["headline"];

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    authorContainer.append(imgContainer);

    const authorImg = document.createElement('img');
    authorImg.setAttribute('src', article["authorPhoto"]);
    imgContainer.append(authorImg);

    const authorName = document.createElement('span');
    authorName.textContent = article["authorName"];
    authorContainer.append(authorName);

    // Append child elements
    card.append(headline, authorContainer);

    // Event Listeners
    card.addEventListener('click', function() {
        console.log(card.querySelector('div.headline').textContent);
    });

    // Return created div.card element
    return card;
}

// Stetch -- ERROR MODAL <<<<<<<<<<<<<<<<<<<<<<<<<<<<=================

/* <div class="modal-window">
    <p class="error-msg">AYYYY</p>
</div> */

function errorModalMaker(error) {
    // Set up parent element
    const modal = document.createElement('div');
    modal.classList.add('modal-window');

    const h3 = document.createElement('h3');
    h3.textContent = "An error has occured fetching article data!"

    // Set up child element(s)
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-msg');
    errorMsg.textContent = error;

    // Append child element(s)
    modal.append(h3, errorMsg);

    // Return the created modal
    return modal;
}