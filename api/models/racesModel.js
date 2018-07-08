'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 
const RaceSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  race_date: {
    type: Date
  },
  length: {
    type: Number
  },
  country: {
    type: String
  }
});
 
module.exports = mongoose.model('races', RaceSchema);