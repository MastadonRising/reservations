var express = require("express");
var path = require("path");
const waitlist = [];
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

  app.post("/api/tables", function (req, res) {
    let reservation = req.body;
    console.log(res);
   const {customerName, phoneNumber, customerEmail, customerID} = reservation;
   
    console.log(customerName);
    if (reservations.length < 5) {
      reservations.push(reservation)
      console.log("You have a reservation!!");
      
    }else{
      waitlist.push(res.body)
      console.log("We are really busy, you are on the waitlist");
      res.json(reservation);
    }
  });

app.get("/api/tables", function (req, res) {
  res.json(reservations);
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });