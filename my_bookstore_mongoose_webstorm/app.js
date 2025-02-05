var express = require('express'); // Get the library
var bodyParser = require('body-parser'); // Lets use body parser
var mongoose = require('mongoose'); // Get the mongoose library

var app = express(); // Create app object
// Let's define a schema to be used with the Book model
var bookSchema = mongoose.Schema({
  name: String
});
// Let's create a Book model using the abovecreated bookSchema
var Book = mongoose.model('Book', bookSchema);

// Lets setup a connection to mongo from mongoose
mongoose.connect('mongodb://localhost/bookstore');
// create a mongoose connection object to attach event listeners
var db = mongoose.connection;
// let's attach an event listener for connection errors
db.on('error', console.error.bind(console, 'connection error:'));
// let's attach an event listener to run one time when the connection opens
db.once('open', function(someData){
  console.log('boom! we are connected to mongo');
});


// Lets create a logger middleware
app.use(function(request, response, next){
  console.log('request received %s %s ', request.method, request.url);
  next();
});

app.use(bodyParser.json());

app.use(express.static('public'));

var books = [
  {id: 17, name: 'bible'}
, {id: 21, name: "qur'an"}
, {id: 35, name: 'torah'}
, {id: 48, name: 'principia matematica'}
, {id: 50, name: 'sruti'}
, {id: 63, name: 'rastafari book'}];

app.get('/', function(request, response){
  console.log(__dirname);
  response.sendFile(__dirname + '/indexAngular.html');
});

app.get('/books', function(request, response){
  Book.find({}, function(err, books){
    if (err){
      console.log(err);
      return;
    }
    response.json(books);
  });
});

app.post('/books', function(request, response){
  console.log(request.body);
  // Let's put a book in the database
  Book.create(request.body, function(err, bookThatGotSaved){
    if (err){
      // log the error so the developer understands there is an error
      console.log(err);
      // exit out this function
      return;
    }
    else {
      console.log('succesfully saved ', bookThatGotSaved);
      response.json(bookThatGotSaved);
    }
  });
});
//
app.patch('/books/:id', function(request, response){
  console.log(request.body);
  Book.update({_id: request.params.id}, request.body, function(err, bookThatGotSaved){
    if (err){
      // log the error so the developer understands there is an error
      console.log(err);
      // exit out this function
      return;
    }
    else {
      console.log('succesfully saved ', bookThatGotSaved);
      response.json(bookThatGotSaved);
    }
  });
});

// Lets get an individual book by id
app.get('/books/:id', function(request, response){
  // lets find the book using mongoose
  Book.findOne({_id: request.params.id}, function(err, book){
    if (err){
      console.log(err);
      return
    }
    response.json(book);
  })
});

app.delete('/books/:id', function(request, response){
  Book.remove({_id: request.params.id}, function(err, book){
    if (err) {
      console.log(err);
      return;
    }
    console.log('succesfully destroyed book with id', request.params.id);
    response.json({'message': 'succesfully deleted'});
  });
});

app.listen(3000, function(){
  console.log("Server started, lets get down");
});
