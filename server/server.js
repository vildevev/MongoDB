var {mongoose} = require('./db/mongoose.js'); 

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

var newTodo = new Todo({
  text: "Cook dinner"
});

newTodo.save().then((docs) => {
  console.log('Save Todo', docs)
}, (e) => {
  console.log("Unable to save")
});


mongoose.disconnect();
