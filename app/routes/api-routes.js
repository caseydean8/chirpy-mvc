// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
// No need to require express in this file

// Routes
// * Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.
module.exports = function(app) {

  // Get all chirps
  app.get('/api/all', (req, res) => {
    console.log('express api route GET');
    connection.query('select * from chirps', (err, data) => {
      if (err) console.log(err);
      console.log(data);
      res.json(data);
    });
  });

  app.post('/api/chirps', (req, res) => {
    connection.query('insert into chirps (author, chirp, created_at) values (?,?,?)', [req.body.author, req.body.chirp, req.body.created_at], (err, data) => {
      if (err) console.log(err);
      console.log('Chirp sent to database');
      res.end();
    })
  })
  

  // Add a chirp


};
