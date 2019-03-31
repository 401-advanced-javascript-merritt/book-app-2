'use strict';

const MongoModel = require('../mongomodels/js');

class Books extends MongoModel {}

const books = new Books();

module.exports = books;