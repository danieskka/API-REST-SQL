const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesApiController");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/', entriesApiController.getEntries);
entriesApiRouter.post('/', entriesApiController.createEntry);
entriesApiRouter.put('/', entriesApiController.updateEntry);
entriesApiRouter.delete('/', entriesApiController.deleteEntry);

module.exports = entriesApiRouter;

// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email