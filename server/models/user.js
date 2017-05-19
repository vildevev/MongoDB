var mongoose = require('mongoose');
var User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  cool: {
    type: Boolean,
    minLength: 1,
    trim: true // removes whitespaces at the end
  },
  completedAt: {
    type: Number
  }
});

module.exports = {
  User
};
