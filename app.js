var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , DataStore = require('nedb')
  , app = express()
  , http_port = 3000
  , booksDb = new DataStore({ filename: 'booksDb.nedb' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Books List
app.get("/books", function(req, res) {
  booksDb.find({}, function (err, docs) {
    res.send(docs);
  });
});


// Add book
app.post("/books", function(req, res) {
  var book = req.body;

  booksDb.insert(book, function (err, newDoc) {
    res.statusCode = 301;
    res.header("location", "/books/"+newDoc._id).end();
  });
});


// Get book by id
app.get("/books/:id", function(req, res) {
  booksDb.findOne({ _id: req.params.id }, function (err, doc) {
    res.send(doc)
  });
});

// Get book by title
app.get("/books/search/title/:value", function(req, res) {
  var r = new RegExp(req.params.value, "i");
  booksDb.find({ "title": { $regex: r } }, function (err, docs) {
    res.send(docs);
  });

});


// Delete book by id
app.delete("/books/:id", function(req, res) {
  booksDb.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
    res.statusCode = 200;
    res.send({res:numRemoved});
  });
});


// Update book
app.put("/books/:id", function(req, res) {
  booksDb.update({_id:req.params.id}, req.body, {}, function (err, numReplaced) {
    res.statusCode = 200;
    res.send({res:numReplaced})
  });
});

// Launch the application once the database is loaded
booksDb.loadDatabase(function (err) {
  app.listen(http_port);
  console.log("Listening on " + http_port);
});