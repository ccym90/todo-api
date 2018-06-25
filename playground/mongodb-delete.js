// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').deleteMany({text: 'Wash the car'}).then((results) => {
  //   console.log(results);
  // });
  //
  // db.collection('Todos').deleteOne({text: 'Wash hair'}).then((results) => {
  //   console.log(results);
  // })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
  //   console.log(results);
  // })

  db.collection('Users').deleteMany({name: 'Claire'}).then((results) => {
    console.log(results);
  })

  // db.close();
});
