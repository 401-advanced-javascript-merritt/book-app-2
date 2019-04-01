'use strict';

/**
 * Thow an error if the file is not found.
 * @param  {} req
 * @param  {} res
 * @param  {'NotFound'};res.status(404} =>{leterror={error
 */
module.exports = (req, res) => {
  let error = {error: 'Not Found'};
  res.status(404).json(error).end();
}
