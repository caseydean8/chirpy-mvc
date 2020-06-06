var connection = require("../config/connection.js");
// No need to require express in this file because it is already required in server file where the Routes are exported too

// Routes
module.exports = function(app) {

  // Get all chirps
  app.get('/api/all', (req, res) => {
    console.log('express api route GET');
    connection.query('select * from chirps', (err, data) => {
      if (err) console.log(err);
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
};
