var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var get_index = require('../../controllers/get_index');

describe('get_index', function() {
  it('Index画面が1回レンダリングされること', function(done) {
    var req,res,spy;
    req = res = {};
    spy = res.render = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
});
