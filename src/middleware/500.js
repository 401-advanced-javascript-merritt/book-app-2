'use strict';

module.exports = (err, req, res, next) => {
  console.log('500 error');
  let error = {error: err };
  res.status(500).json(error).end();
}
