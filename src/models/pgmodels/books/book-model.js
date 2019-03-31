'use strict';

const client = require('../../../../index.js');
const SQLModel = require('../pgmodels.js');

class Books extends SQLModel {
  createShelf(shelf) {
    console.log('in helper bookshelf', shelf);
    let normalizedShelf = shelf.bookshelf.toLowerCase();
    let SQL1 = `SELECT id from bookshelves where name=$1;`;
    let values1 = [normalizedShelf];
  
    return this.client.query(SQL1, values1)
      .then(results => {
        if (results.rowCount) {
          console.log('old shelf');
          return results.rows[0].id;
        } else {
          console.log('new shelf');
          let INSERT = `INSERT INTO bookshelves(name) VALUES($1) RETURNING id;`;
          let insertValues = [shelf.bookshelf];
  
          return this.client.query(INSERT, insertValues);
        }
      })
  }
}

const books = new Books(client);

module.exports = books;