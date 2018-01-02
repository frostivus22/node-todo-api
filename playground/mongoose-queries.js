const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//line below takes ObjectId from mongodb npm
const {ObjectID} = require('mongodb');

var id = '5a47427e9b9fe2dc106107c9';

//line below validates if id is valid
if(!ObjectID.isValid(id)){
  console.log('Id not Valid');
}


Todo.find({
  _id: id
}).then((todos) => {
  console.log(JSON.stringify(todos, undefined, 2));
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then((todo) => {
if(!todo) {
  return console.log("there is no id like this");
}
console.log(JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));

var id2= '5a41600422856cd432db961d';

User.findById(id2).then((user) => {
  if(!user){
    return console.log('there is no user like that');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
