'use strict';
module.exports = function(app) {
  var racesController = require('../controllers/racesController.js');

  // todoList Routes
  app.route('/races')
    .get(racesController.allRaces)
    .post(racesController.addRace);


  app.route('/races/:raceId')
    .get(racesController.getOneRace)
    .put(racesController.updateRace)
    .delete(racesController.deleteRace);
};