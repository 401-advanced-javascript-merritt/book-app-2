'use strict';

module.exports = (req, res, next) => {
  let error = {error: 'Not Found'};
  res.status(404).json(error).end();
};