var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} =  require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

//creates a dyncamic port ready for herkou
const port = process.env.PORT || 3000

app.use(bodyParser.json());


//creates a post route
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

//creates a get route that targets id's
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate id using isValid
   // if error insues return error 404 - send back empty bodyParser
   if(!ObjectID.isValid(id)){
     return res.status(404).send();
   }

  Todo.findById(id).then((todo) => {
    //findById
     //success case
       // if todo - send it back
       //if no todo - send back 404 with empty body
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    //error case
      //send back 400 and send empty body back
      res.status(400).send();
    })
});

//creates a delete route
app.delete('/todos/:id', (req,res) => {
//get the id
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  //validate the id -> not falid? return 404
  //remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    //find if the item exists if not send back an error
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo})
    //if item exists delete it and print the deleted item
    res.status(200).send(todo);
  }).catch((e) => {
    res.status(400).send();

  });



});

app.listen(port,() => {
  console.log(`started up at port ${port}`);
});


module.exports = {app};
