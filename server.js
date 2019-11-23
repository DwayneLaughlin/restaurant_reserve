// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
// ===============================================================
const rsvp = [
    {
        custName: "steve",
        custEmail: "bob@bob.com",
        custId: "12343",
        custPhone: "773-111-5555"
    },
    {
        custName: "jeff",
        custEmail: "jeff@jeff.com",
        custId: "12344",
        custPhone: "773-555-1111"
    }
];

const waitList = [
    {
        custName: "adam",
        custEmail: "adam@adam.com",
        custId: "54321",
        custPhone: "777-888-9999"
    },
    {
        custName: "bill",
        custEmail: "bill@bill.com",
        custId: "54322",
        custPhone: "777-999-9999"
    }
];



// ROUTES
// =================================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.get("/api/rsvp", function(req, res) {
    return res.json(rsvp)
  });

  app.get("/tables", function (req, res){
      res.sendfile(path.join(__dirname,"./public/tables.html"));
  });

  app.get("/form", function (req, res){
    res.sendfile(path.join(__dirname,"./public/form.html"));
});


  app.get("/api/waitList", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res){
    if (rsvp.length < 4){
        rsvp.push(req.body);
        res.json(true);
    } else {
        waitList.push(req.body);
        res.json(false)
    }
      waitList.push(req.body);
      res.json(false);
  });




// LISTENER
// =============================================================

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})