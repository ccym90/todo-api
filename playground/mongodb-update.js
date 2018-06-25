// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //need update operators from https://docs.mongodb.com/manual/reference/operator/update/
//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b30626146c52ea44866a5f0')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3080fc44cd4660093ad71d')
  }, {
    $set: {name: 'Sarah'}
  }, {
    $inc: {age: +2}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  // db.close();
});
