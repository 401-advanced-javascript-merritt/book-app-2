'use strict';

const client = require('../../../../index.js');
const SQLModel = require('../pgmodels.js');

class Books extends SQLModel {
  /**
   * Create a new shelf, then call the next function to create the new book value in the database.
   * @param  {} shelf
   * @param  {} {console.log('inhelperbookshelf'
   * @param  {} shelf
   * @param  {} ;letnormalizedShelf=shelf.bookshelf.toLowerCase(
   * @param  {} ;letSQL1=`SELECTidfrombookshelveswherename=$1;`;letvalues1=[normalizedShelf];returnthis.client.query(SQL1
   * @param  {} values1
   * @param  {} .then(results=>{if(results.rowCount
   * @param  {} {console.log('oldshelf'
   * @param  {} ;returnresults.rows[0].id;}else{console.log('newshelf'
   * @param  {} ;letINSERT=`INSERTINTObookshelves(name
   * @param  {} VALUES($1
   * @param  {} RETURNINGid;`;letinsertValues=[shelf.bookshelf];returnthis.client.query(INSERT
   * @param  {} insertValues
   * @param  {} ;}}
   */
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
