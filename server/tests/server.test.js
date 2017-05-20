const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => {
    done()
  })
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test Todo Test';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    })
  })
  it('does not not create a todo with invalid data', (done) => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) => {
    if (err) {
      return done(err);
    }

    Todo.find().then((todos) => {
      expect(todos.length).toBe(0);
      done();
    }).catch((e) => done(e));
    })
  })
})

describe('GET /todos', () => {
  it('should return all todos', (done) => {

    Todo.insertMany([{
      text: "Testing this out",
      completed: false
    },
    {
    text: "Does it work?",
    completed: true
  }], (err, docs) => {});

    request(app)
    .get('/todos')
    .expect(200)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.body.length).toBe(2);
      Todo.find({}, (err, todos) => {
        if (err) {
          return done(err);
        }
        expect(todos.length).toBe(2);
        done();
      });
    })
  })
})
