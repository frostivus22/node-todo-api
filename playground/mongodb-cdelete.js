// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // deleteMany
  db.collection('Users').deleteMany({name: 'Maverick'}).then((result) => {
    console.log(result);
  });

  //deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a398099a141e816f4a03540')}).then((result) => {
    console.log(result);
  });
  // db.close();
});
