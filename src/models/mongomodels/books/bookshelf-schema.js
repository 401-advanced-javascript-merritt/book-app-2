'use strict';
console.log('inside bookshelf schema');

//const books = require('./book-model.js');
const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const bookshelves = mongoose.Schema({
  name: {type:String, required: true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}} );

bookshelves.virtual('books', {
  ref: 'books',
  localField: '_id',
  foreignField: 'bookshelf',
  justOne: false,
});

module.exports = mongoose.model('bookshelves', bookshelves);
