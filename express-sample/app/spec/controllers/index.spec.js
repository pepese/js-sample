var app = require('../../app');

describe('/', function() {
    it('Index画面が表示されること', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', 'text/html')
            .expect(200, done);
    });
});
