var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var newTodo = new Todo({
    title: req.body.title,
    completed: req.body.completed
  })
  newTodo.save().then((doc) => {
    console.log("it was saved", doc)
  }, (e) => {
    console.log("unable to save", e)
  })
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("You have successfully connected on port " + port)
});
