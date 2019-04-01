'use strict';

console.log('inside book schema');

// eslint-disable-next-line no-unused-vars
const bookshelves = require('./bookshelf-schema.js');

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

// eslint-disable-next-line new-cap
const books = mongoose.Schema({
  title: {type:String, required: true},
  author: { type:String, required: true},
  isbn: {type:String, required: true},
  image_url: {type:String, required: false},
  description: {type: String, required: false},
},{toObject:{virtuals: true}, toJSON: {virtuals:true}}
);

books.virtual('bookshelves', {
  ref: 'bookshelves',
  localField: 'bookshelf',
  foreignField: 'name',
  justOne: false,
});

/**
 * Just before the find function is run, populate the virtual schema with the values for bookshelf.
 * @param  {} 'find'
 * @param  {} function(
 * @param  {} {try{this.populate('bookshelves'
 * @param  {} ;}catch(e
 * @param  {} {console.error('finderror'
 * @param  {} e
 * @param  {} ;}}
 */
books.pre('find', function() {
  try{
    this.populate('bookshelves');
  }
  catch(e) {console.error('find error', e); }
});

module.exports = mongoose.model('books', books);
