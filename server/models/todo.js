var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    minLength: 1,
    trim: true // removes whitespaces at the end
  },
  completedAt: {
    type: Number
  }
});

module.exports = {
  Todo
};
