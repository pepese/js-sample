var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var get_index = require('../../controllers/get_index');

//var request = require('supertest');
//var app = require('../../app');
//var req = request(app);

describe('get_index', function() {
  it('Index画面が1回レンダリングされること', function(done) {
    var req,res,spy;
    req = res = {};
    spy = res.render = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
//  it('「/」でアクセスできること', function() {
//    req.get('/').end(function(err, ret) {
//      var res = ret.res;
//      var statusCode = res.statusCode;
//      var text = res.text;
//      statusCode.should.equal(200);
//      text.should.equal('respond with a resource');
//      done();
//    });
//  });
});
