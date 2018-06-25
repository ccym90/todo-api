var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   name: 'C',
//   email: 'cim@gmail.com'
// })
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('cannot save user');
// });

module.exports = {User};
