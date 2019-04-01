'use strict';

const errorHandler = require(`./../middleware/500.js`);

const express = require('express');
const superagent = require('superagent');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/searches', createSearch);
router.get('/searches/new', newSearch);


function newSearch(request, response) {
  response.render('pages/searches/new');
}

function createSearch(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
  if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
    .then(results => response.render('pages/searches/show', { results: results }))
    .catch(errorHandler);
}

// HELPER FUNCTIONS
function Book(info) {
  const placeholderImage = 'https://i.imgur.com/J5LVHEL.jpg';

  this.title = info.title ? info.title : 'No title available';
  this.author = info.authors ? info.authors[0] : 'No author available';
  this.isbn = info.industryIdentifiers ? `ISBN_13 ${info.industryIdentifiers[0].identifier}` : 'No ISBN available';
  this.image_url = info.imageLinks ? info.imageLinks.smallThumbnail : placeholderImage;
  this.description = info.description ? info.description : 'No description available';
  this.id = info.industryIdentifiers ? `${info.industryIdentifiers[0].identifier}` : '';
}

module.exports = router;
