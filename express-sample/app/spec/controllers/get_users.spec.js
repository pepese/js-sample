const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const should = require('should');

const get_index = require('../../controllers/get_users');

describe('/users', () => {
  it('Users画面が1回レンダリングされること', (done) => {
    var req,res,spy;
    req = res = {};
    spy = res.send = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
});
