'use strict';

console.log('inside book model');

const MongoModel = require('../mongomodels.js');
const schema = require('./book-schema.js');

class Books extends MongoModel {}

const books = new Books(schema);

module.exports = books;
