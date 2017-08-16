const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const get_index = require('../../controllers/get_index');

describe('/', () => {
  it('Index画面が1回レンダリングされること', (done) => {
    let req,res,spy;
    req = res = {};
    spy = res.render = sinon.spy();

    get_index(req, res);
    expect(spy.calledOnce).to.equal(true);

    done();
  });
});
