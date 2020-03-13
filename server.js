var express = require("express");
var path = require("path");
const tables = [];
const reservations=[];
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html")  
    )
  });


  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html")  
    )
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html")  
    )
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });
  
  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });
  
  app.post("/api/reservations", function(req, res) {
  
    var newReservation = req.body;
  
    console.log(newReservation);
  
    Reservations.push(newReservation);
  
    res.json(newReservation);
  });
  
  app.post("/api/tables", function(req, res) {
  
    var 
  })








app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });