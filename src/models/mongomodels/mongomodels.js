'use strict';

console.log('inside mongo models');
/**
 * The constructor for the mongo database model.
 * @param  {} schema
 * @param  {} {this.schema=schema;}get(_id
 * @param  {} {console.log('insidemongomodelsget'
 * @param  {_id}
 */
class MongoModel {
  constructor(schema){
    this.schema = schema;
  }
  /**
   * The get method. finds and returns values from the mongo database.
   * @param  {} _id
   * @param  {} {console.log('insidemongomodelsget'
   * @param  {_id}:{};returnthis.schema.find(queryObject} ;letqueryObject=_id?{'_id'
   */
  get(_id){
    console.log('inside mongo models get');
    let queryObject = _id ? {'_id' : _id} : {};
    //console.log(this.schema.find(queryObject));
    return this.schema.find(queryObject);
  }

  /**
   * Add a new value to the mongo database.
   * @param  {} record
   * @param  {} {letnewRecord=newthis.schema(record
   * @param  {} ;returnnewRecord.save(
   */
  post(record){
    // eslint-disable-next-line new-cap
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   *Change an existing value from the mongo database.
   * @param  {} _id
   * @param  {} record
   * @param  {} {returnthis.schema.findByIdAndUpdate(_id
   * @param  {} record
   * @param  {true}} {new
   */
  put(_id, record){
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Delete a value from the mongo database.
   * @param  {} _id
   * @param  {} {returnthis.schema.findByIdAndDelete(_id
   */
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = MongoModel;
