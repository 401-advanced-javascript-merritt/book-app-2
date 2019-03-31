'use strict';

require('dotenv').config();

let client = null;

if(process.env.DATABASE === 'pg'){
  const pg = require('pg');
  client = new pg.Client(process.env.DATABASE_URL);
  client.connect();
  client.on('error', err => console.error(err));
  module.exports = client;
}
else{
  mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
}

require('./src/server.js').start(process.env.PORT, client);