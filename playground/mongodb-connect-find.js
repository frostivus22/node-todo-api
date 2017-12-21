// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a3b00e5e12dd14fc219d6e7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log("unable to fetch todos");
  // });

  // db.collection('Todos').find(
  //
  // ).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // },(err) => {
  //   console.log("unable to fetch todos");
  // });

  db.collection('Users').find({
    name: "Maverick"
  }).count().then((count) => {
    console.log(`Todos count: ${count}`);
  },(err) => {
    console.log("unable to fetch todos");
  });

  db.collection('Users').find({
    name: "Maverick"
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log("unable to fetch todos");
  });


  // db.close();
});
