const assert = require('assert');
const request = require('request');

const socketAddr = 'api:9000';
const protocol = 'http';
const path = 'todo';
const todosUrl = protocol + '://' + socketAddr + '/' + path;

const validTodo = {
  name: "foo",
  description: "bar",
  dueDate: "2018-03-29",
  complete: false,
};

const invalidTodo = {
  name: "foo",
  description: "bar",
  dueDate: "garbage",
  complete: false,
};

const testTodo = {
  name: "test before",
  description: "bar",
  dueDate: "2018-03-29",
  complete: false,
};

const pollApi = (done) => {

  let count = 0;

  let poll = setInterval(() => {
    request(protocol + '://' + socketAddr, function(err, res) {
      count+=1;
      if (res && res.statusCode) {
        clearInterval(poll);
        done();
      } else if (count > 3 ) {
        // eslint-disable-next-line no-console
        console.error('Api service not available. Exiting.');
        process.exit(1);
      }
    });
  }, 500);
};

describe('/todo', function() {
  before(function(done) {

    pollApi(done);

  });

  describe('GET', function() {
    it('return a list of todos', function(done) {
      request.get(todosUrl, function(err, res, body) {
        assert.strictEqual(res.statusCode, 200);
        assert(body.length > 0);
        done();
      });
    });
  });

  describe('POST', function() {
    it('should allow a user to create a valid todo', function(done) {
      request.post({
        url: todosUrl,
        json: validTodo,
      }, function(err, res, body) {
        assert.strictEqual(res.statusCode, 200);
        assert(body.id);
        done();
      });
    });
    it('should fail to create an invalid todo', function(done) {
      request.post({
        url: todosUrl,
        json: invalidTodo,
      }, function(err, res) {
        assert.strictEqual(res.statusCode, 400);
        done();
      });
    });
  });

  describe('PATCH', function() {

    let testTodoPatch;

    before(function(done) {
      request.post({
        url: todosUrl,
        json: testTodo,
      }, function(err, res, body) {
        testTodoPatch = body;
        done();
      });
    });
    it('should allow a user to update a todo', function(done) {
      const newName = 'test after';
      testTodoPatch.name = newName;
      request.patch({
        url: todosUrl + '/' + testTodoPatch.id,
        json: testTodoPatch,
      }, function(err, res, body) {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(body.name, newName);
        done();
      });
    });
    it('should not allow the user to update a non existant todo', function(done) {
      const badId = -9999;
      testTodoPatch.id = badId;
      request.patch({
        url: todosUrl + '/' + badId,
        json: testTodoPatch,
      }, function(err, res) {
        assert.strictEqual(res.statusCode, 404);
        done();
      });
    });
  });

  describe('DELETE', function() {

    let testTodoDelete;

    before(function(done) {
      request.post({
        url: todosUrl,
        json: testTodo,
      }, function(err, res, body) {
        testTodoDelete = body;
        done();
      });
    });
    it('should allow the user to delete a todo', function(done) {
      request.delete({
        url: todosUrl + '/' + testTodoDelete.id,
      }, function(err, res) {
        assert.strictEqual(res.statusCode, 200);
        done();
      });
    });
    it('should not allow the user to delete a non existant todo', function(done) {
      const badId = -9999;
      request.delete({
        url: todosUrl + '/' + badId,
      }, function(err, res) {
        assert.strictEqual(res.statusCode, 404);
        done();
      });
    });
  });

});