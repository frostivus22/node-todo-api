// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a405651b488c1c525ab5c3a')
  },{
      $set: {
        name: "Nicholo"
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  // db.close();
});
