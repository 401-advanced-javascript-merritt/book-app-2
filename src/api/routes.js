'use strict';

const cwd = process.cwd();
const express = require('express');
const methodOverride = require('method-override');
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const handleGetAll = require(`${cwd}/src/api/routes/handleGetAll.js`);
const handleGetOne = require(`${cwd}/src/api/routes/handleGetOne.js`);
const handleCreate = require(`${cwd}/src/api/routes/handleCreate.js`);
const handleUpdate = require(`${cwd}/src/api/routes/handleUpdate.js`);
const handleDelete = require(`${cwd}/src/api/routes/handleDelete.js`);

const app = express();

app.set('view engine', 'ejs');

const router = express.Router();
router.use(modelFinder);

router.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

router.get('/', handleGetAll);
router.get('/books/:id', handleGetOne);
router.post('/books', handleCreate);
router.put('/books/:id', handleUpdate);
router.delete('/books/:id', handleDelete);

module.exports = router;