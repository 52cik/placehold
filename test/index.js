'use strict';

var http = require('http');
var request = require('supertest');
var placehold = require('..');

// Rewriting the _assertBody method, the conversion of binary SVG string.
var _assertBody = request.Test.prototype._assertBody;
request.Test.prototype._assertBody = function(body, res) {
  res.text = res.body.toString();
  res.body = {};
  _assertBody.call(request, body, res);
};

var app = http.createServer(placehold);
// process.env.PORT = 8899;

describe('placehold test:', function () {
  it('should 200x200px.', function (done) {
    request(app)
    .get('/200')
    .expect('Content-Type', /svg/)
    .expect(200, /200x200/, done)
  });

  it('should size is 200x100px.', function (done) {
    request(app)
    .get('/200x100/')
    .expect(200, /200x100/, done)
  });

  it('should bgcolor is #fff.', function (done) {
    request(app)
    .get('/123/fff')
    .expect(200, /fill="#fff"\//, done)
  });

  it('should color is #fff.', function (done) {
    request(app)
    .get('/123/aaa/fff')
    .expect(200, /fill="#fff"\s/, done)
  });

  it('should text is "hello world!"', function (done) {
    request(app)
    .get('/?text=hello world!')
    .expect(200, /hello world!/, done)
  });

  it('should {size: 200x100, bgcolor: eee, color: fff, text: hello world!}', function (done) {
    request(app)
    .get('/200x100/eee/fff?text=hello world!')
    .expect(200, /width="200" height="100" fill="#eee[^#]+#fff[^>]+>hello world!/, done)
  });
});
