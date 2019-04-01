'use strict';

const cwd = process.cwd();
const express = require('express');
const swagger = require('swagger-ui-express');
const swaggerDocs = require('../../docs/config/swagger.json');
const methodOverride = require('method-override');
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const handleGetAll = require(`${cwd}/src/api/routes/handleGetAll.js`);
const handleGetOne = require(`${cwd}/src/api/routes/handleGetOne.js`);
const handleCreate = require(`${cwd}/src/api/routes/handleCreate.js`);
const handleUpdate = require(`${cwd}/src/api/routes/handleUpdate.js`);
const handleDelete = require(`${cwd}/src/api/routes/handleDelete.js`);

const app = express();

app.set('view engine', 'ejs');

// eslint-disable-next-line new-cap
const router = express.Router();
router.use(modelFinder);
/**
 * Use method override on the front end.
 * @param  {} methodOverride((request
 * @param  {} =>{if(request.body&&typeofrequest.body==='object'&&'_method'inrequest.body
 * @param  {} {letmethod=request.body._method;deleterequest.body._method;returnmethod;}}
 */
router.use(methodOverride((request) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

//handle the data requests.
router.use('/api/doc', swagger.serve , swagger.setup(swaggerDocs));
router.get('/', handleGetAll);
router.get('/books/:id', handleGetOne);
router.post('/books', handleCreate);
router.put('/books/:id', handleUpdate);
router.delete('/books/:id', handleDelete);

module.exports = router;
