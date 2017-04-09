var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var get_index = require('../../controllers/get_index');

describe('/', function() {
  it('Index画面が表示されること', function(done) {
    var req,res,spy;

    req = res = {};
    spy = res.render = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
});
