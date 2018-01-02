const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//the line below removes everything
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'5a48ea519097c279ab0d5b66'}).then((todo) =>  {

})

//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5a48ea519097c279ab0d5b66').then((todo) => {
  console.log(todo);
})
