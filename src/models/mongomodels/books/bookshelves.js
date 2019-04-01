'use strict';

const bookshelvesSchema = require('./bookshelf-schema.js');
const MongoModel = require('../mongomodels.js');

class Bookshelves extends MongoModel {}

module.exports = new Bookshelves(bookshelvesSchema);
