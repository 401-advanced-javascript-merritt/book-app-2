'use strict';

console.log('inside book schema');

const bookshelves = require('./bookshelf-schema.js');

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const books = mongoose.Schema({
  //_id: {type:Number, required:true},
  title: {type:String, required: true},
  author: { type:String, required: true},
  isbn: {type:String, required: true},
  image_url: {type:String, required: false},
  description: {type: String, required: false},
  //bookshelf: {type: String, required: false},
},{toObject:{virtuals: true}, toJSON: {virtuals:true}}
 );

// console.log('before virtual in book schema');

books.virtual('bookshelves', {
  ref: 'bookshelves',
  localField: 'bookshelf',
  foreignField: 'name',
  justOne: false,
});

console.log('after virtual in book schema');

books.pre('find', function() {
  try{
    this.populate('bookshelves');
    //console.log('after populate', this.populate('actualBookshelf').schema);
  }
  catch(e) {console.error('find error', e); }
});

// books.pre('save', function(){
//   try{
//     this.populate('bookshelves');
//     console.log('pre save');
//   }
//   catch(e) {console.error('find error', e)}
// })

module.exports = mongoose.model('books', books);