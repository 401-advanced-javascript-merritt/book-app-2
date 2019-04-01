'use strict';
/**
 * The constructor for the postgres database model.
 * @param  {} client
 * @param  {} {this.client=client;}get(id
 * @param  {} {if(id
 * @param  {} {console.log('thereisanid'
 * @param  {} ;letSQL='SELECTDISTINCTid
 * @param  {} nameFROMbookshelvesORDERBYname;';returnthis.client.query(SQL
 * @param  {} .then(shelves=>{console.log('shelvesloginpgmodel'
 * @param  {} shelves.rows
 * @param  {} ;this.shelves=shelves;letSQL='SELECTbooks.*
 * @param  {} bookshelves.nameFROMbooksINNERJOINbookshelvesonbooks.bookshelf_id=bookshelves.idWHEREbooks.id=$1;';letvalues=[parseInt(id
 * @param  {} ];returnthis.client.query(SQL
 * @param  {} values
 * @param  {} ;}
 * @param  {} }else{letSQL='SELECT*FROMbooks;';returnthis.client.query(SQL
 * @param  {} ;}}post(body
 * @param  {} id
 */
class SQLModel {
  constructor(client) {
    this.client = client;
  }
  /**
   * Get values from the Postgres database.
   * @param  {} id
   * @param  {} {if(id
   * @param  {} {console.log('thereisanid'
   * @param  {} ;letSQL='SELECTDISTINCTid
   * @param  {} nameFROMbookshelvesORDERBYname;';returnthis.client.query(SQL
   * @param  {} .then(shelves=>{console.log('shelvesloginpgmodel'
   * @param  {} shelves.rows
   * @param  {} ;this.shelves=shelves;letSQL='SELECTbooks.*
   * @param  {} bookshelves.nameFROMbooksINNERJOINbookshelvesonbooks.bookshelf_id=bookshelves.idWHEREbooks.id=$1;';letvalues=[parseInt(id
   * @param  {} ];returnthis.client.query(SQL
   * @param  {} values
   * @param  {} ;}
   * @param  {} }else{letSQL='SELECT*FROMbooks;';returnthis.client.query(SQL
   */
  get(id){
    if(id){
      console.log('there is an id');
      let SQL = 'SELECT DISTINCT id, name FROM bookshelves ORDER BY name;';
      return this.client.query(SQL)
        .then(shelves => {
          console.log('shelves log in pgmodel ', shelves.rows);
          this.shelves = shelves;
          let SQL = 'SELECT books.*, bookshelves.name FROM books INNER JOIN bookshelves on books.bookshelf_id=bookshelves.id WHERE books.id=$1;';
          let values = [parseInt(id)];
          return this.client.query(SQL, values);
        })
    }
    else{
      let SQL = 'SELECT * FROM books;';
      return this.client.query(SQL);
    }
  }
  /**
   * Post values to the postgres database.
   * @param  {} body
   * @param  {} id
   * @param  {} {console.log('inpost
   */
  post(body, id){
    console.log('in post:');
    let { title, author, isbn, image_url, description } = body;
    let SQL = 'INSERT INTO books(title, author, isbn, image_url, description, bookshelf_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;';
    let values = [title, author, isbn, image_url, description, id];

    return this.client.query(SQL, values);
  }
  /**
   * Update existing values in the postgres database.
   * @param  {} request
   * @param  {} {let{title
   * @param  {} author
   * @param  {} isbn
   * @param  {} image_url
   * @param  {} description
   * @param  {} bookshelf_id}=request.body;letSQL=`UPDATEbooksSETtitle=$1
   * @param  {} author=$2
   * @param  {} isbn=$3
   * @param  {} image_url=$4
   * @param  {} description=$5
   * @param  {} bookshelf_id=$6WHEREid=$7;`;letvalues=[title
   * @param  {} author
   * @param  {} isbn
   * @param  {} image_url
   * @param  {} description
   * @param  {} bookshelf_id
   * @param  {} request.params.id];returnthis.client.query(SQL
   * @param  {} values
   */
  put(request){

    let { title, author, isbn, image_url, description, bookshelf_id } = request.body;
    let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5, bookshelf_id=$6 WHERE id=$7;`;
    let values = [title, author, isbn, image_url, description, bookshelf_id, request.params.id];

    return this.client.query(SQL, values)
  }
  /**
   * Delete a value from the postgres database.
   * @param  {} id
   * @param  {} {console.log(id
   * @param  {} ;letSQL='DELETEFROMbooksWHEREid=$1;';letvalues=[id];returnthis.client.query(SQL
   * @param  {} values
   */
  delete(id){
    console.log(id);
    let SQL = 'DELETE FROM books WHERE id=$1;';
    let values = [id];
    return this.client.query(SQL, values);
  }


}
module.exports = SQLModel;

