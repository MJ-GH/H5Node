const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/controller');

urlRoutes.post('/', controller.createPerson);
urlRoutes.get('/:id', controller.readPerson);
urlRoutes.get('/', controller.readAllPeople);
urlRoutes.put('/:id', controller.updatePerson);
urlRoutes.delete('/:id', controller.deletePerson);

module.exports = urlRoutes;