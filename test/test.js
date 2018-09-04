var expect  = require('chai').expect;
var request = require('request');

if('Main page content', function(done) {
	console.log('1');
    request('http://localhost:3000' , function(error, response, body) {
		console.log('2');
        expect(body).to.equal('Hello World');
        console.log('3');
        done();
    });
});
