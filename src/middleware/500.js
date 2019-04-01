'use strict';
/**
 * Respond with 500 if the server makes an error.
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} =>{console.log('500error'
 * @param  {err};res.status(500} ;leterror={error
 */
module.exports = (err, req, res) => {
  console.log('500 error');
  let error = {error: err };
  res.status(500).json(error).end();
}
