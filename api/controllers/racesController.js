'use strict';

const mongoose = require('mongoose'),
  Races = require('../models/racesModel');

exports.allRaces = function(req, res) {
  Races.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.addRace = function(req, res) {
  const newRace = new Races(req.body);
  newRace.save(function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


exports.getOneRace = function(req, res) {
  Races.findById(req.params.raceId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updateRace = function(req, res) {
  Races.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


exports.deleteRace = function(req, res) {
  Races.remove({
    _id: req.params.raceId
  }, function(err, race) {
    if (err)
      res.send(err);
    res.json({ message: 'Race successfully deleted' });
  });
};