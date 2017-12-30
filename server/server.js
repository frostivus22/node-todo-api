var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} =  require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12341234 --> how to let the 1234 part be dynamically chosen by the Users

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;


  //validate id using isValid
   // if error insues return error 404 - send back empty bodyParser
   if(!ObjectID.isValid(id)){
     return res.status(404).send();
   }

   //findById
    //success case
      // if todo - send it back
      //if no todo - send back 404 with empty body
    //error case
      //send back 400 and send empty body back
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
      res.status(400).send();
    })
});

app.listen(3000,() => {
  console.log('starting on port 3000');
});


module.exports = {app};
