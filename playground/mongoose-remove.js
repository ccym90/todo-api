const {MongoClient, ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })
//
Todo.findOneAndRemove({_id: '5b333ac346c52ea44866a5f1'}).then((todo) => {
  console.log(todo);
})



// Todo.findByIdAndRemove('5b333ad746c52ea44866a5f2').then((todo) => {
//   console.log(todo);
// })
