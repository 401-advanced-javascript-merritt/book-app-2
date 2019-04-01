'use strict';

console.log('inside mongo models');

class MongoModel {
  constructor(schema){
    this.schema = schema;
  }
  get(_id){
    console.log('inside mongo models get');
    let queryObject = _id ? {'_id' : _id} : {};
    //console.log(this.schema.find(queryObject));
    return this.schema.find(queryObject);
  }
  post(record){
    console.log(record);
    let shelf = record.bookshelf;
    console.log('shelf: ', shelf)
    console.log('inside mongomodel post method');
    let newRecord = new this.schema(record);
    //newRecord.bookshelves = shelf;
    console.log(newRecord);
    return newRecord.save();
  }
  put(_id, record){
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = MongoModel;