const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  racesRoutes = require('./api/routes/racesRoutes');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todolist:password123@ds215739.mlab.com:15739/stratify');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

racesRoutes(app);

app.get('/',(req,res)=>{
  res.send('RESTful API server started on: ' + port)
});

app.listen(port);