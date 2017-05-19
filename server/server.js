var {mongoose} = require('./db/mongoose.js');
var Todo = require('./db/models/todo.js');
var User = require('./db/models/user.js');

var newTodo = new Todo({
  text: "Cook dinner"
});

newTodo.save().then((docs) => {
  console.log('Save Todo', docs)
}, (e) => {
  console.log("Unable to save")
});

mongoose.disconnect();
