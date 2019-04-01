'use strict';
console.log('inside bookshelf schema');

const books = require('./book-model.js');
const mongoose = require('mongoose');

const bookshelves = mongoose.Schema({
  name: {type:String, required: true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}} );

bookshelves.virtual('books', {
  ref: 'books',
  localField: '_id',
  foreignField: 'bookshelf',
  justOne: false,
});

// bookshelves.pre('find', function() {
//   try {
//     this.populate('books');
//     console.log('after populate in bookshelves');
//   }
//   catch(e) { console.log('Find error', e);}
// })

module.exports = mongoose.model('bookshelves', bookshelves);