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
    text: req.body.text,
    completed: req.body.completed
  })
  newTodo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
});

app.get('/todos', (req, res) => {
  var todos = Todo.find((err, docs) => {
    if(err) {
      return res.send(err);
    }
    res.send(docs);
  });
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("You have successfully connected on port " + port)
});

module.exports = {
  app
};
