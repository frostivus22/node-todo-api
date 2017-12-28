var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text:'Lemme eat',
// });
//
// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e) => {
//     console.log('It did not save', e);
// });

var User = mongoose.model('Users', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});

  var newEmail = new User({
    email:'  nicksolante87@gmail.com  '
  });

  newEmail.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  },(e) =>{
    console.log('unable to do it', e);
  });
