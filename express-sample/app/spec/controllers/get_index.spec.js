const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const should = require('should');

const get_index = require('../../controllers/get_index');

describe('get_index', () => {
  it('Index画面が1回レンダリングされること', function(done) {
    var req,res,spy;
    req = res = {};
    spy = res.render = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
});
