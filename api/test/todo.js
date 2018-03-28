const assert = require('assert');
const request = require('request');

const url = 'http://api:9000/todo';

const validTodo = {
  name: "foo",
  description: "bar",
  dueDate: "2018-03-29",
  complete: false
};

const invalidTodo = {
  name: "foo",
  description: "bar",
  dueDate: "garbage",
  complete: false
}

const testTodo = {
  name: "test before",
  description: "bar",
  dueDate: "2018-03-29",
  complete: false
};

describe('/todo', function() {

	// TODO implement OPTIONS tests

	describe('GET', function(done) {
		it('return a list of todos', function(done) {
			request.get('http://api:9000/todo', function(err, res, body) {
			  assert.strictEqual(res.statusCode, 200);
			  assert(body.length > 0);
			  done();
			});
		});
	});

	describe('POST', function() {
		it('should allow a user to create a valid todo', function(done) {
			request.post({
				url: url,
				json: validTodo,
			}, function(err, res, body) {
			  assert.strictEqual(res.statusCode, 200);
			  assert(body.id);
			  done();
			});
		});
		it('should fail to create an invalid todo', function(done) {
			request.post({
				url: url,
				json: invalidTodo,
			}, function(err, res, body) {
			  assert.strictEqual(res.statusCode, 400);
			  done();
			});
		});
	});

	describe('PATCH', function() {
		before(function(done) {
			request.post({
				url: url,
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
				url: url + '/' + testTodoPatch.id,
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
				url: url + '/' + badId,
				json: testTodoPatch,
			}, function(err, res, body) {
				assert.strictEqual(res.statusCode, 404);
				done();
			});
		});
	});

	describe('DELETE', function() {
		before(function(done) {
			request.post({
				url: url,
				json: testTodo,
			}, function(err, res, body) {
				testTodoDelete = body;
				done();
			});
		});
		it('should allow the user to delete a todo', function(done) {
			request.delete({
				url: url + '/' + testTodoDelete.id,
			}, function(err, res, body) {
				assert.strictEqual(res.statusCode, 200);
				done();
			});
		});
		it('should not allow the user to delete a non existant todo', function(done) {
			const badId = -9999;
			request.delete({
				url: url + '/' + testTodoDelete.id,
			}, function(err, res, body) {
				assert.strictEqual(res.statusCode, 404);
				done();
			});
		});
	});

});