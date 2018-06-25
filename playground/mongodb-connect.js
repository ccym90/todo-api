// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Claire', age: 28};
var {name} = user;
console.log(name);


// creating new db in mongo to store to .../TodoApp
//return to stop running function if error found
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDb server');
  }
  console.log('connected to the mongodb server');

  db.collection('Users').insertOne({
    name: 'Claire',
    age: 28,
    location: 'London'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
