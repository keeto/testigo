exports.setup = function(Tests){

var Case = require('lib/case').Case;

Tests.describe('Cases', function(it, setup){

	setup('beforeEach', function(){
		this.failingTest = new Case('descr', function(expect){
			expect(1).toBe(1);
			expect.apply(null, [1]).toBeAnInstanceOf(Number);
			expect.call(null, 'mark').toBe('w');
			expect.apply;
			expect.call;
		});
		this.passingTest = new Case('descr', function(expect){
			expect(1).toBe(1);
		});
	});

	it('should have the correct number of expectations', function(expect){
		expect(this.failingTest.count()).toBe(3);
	});

	it('should pass if all expectations pass', function(expect){
		this.passingTest.run();
		var results = this.passingTest.results();
		expect(results.allPassed).toBeTrue();
	});

	it('should fail is all expectations fail', function(expect){
		this.failingTest.run();
		var results = this.failingTest.results();
		expect(results.allPassed).toBeFalse();
	});

	it('should have a `tests` object', function(expect){
		this.passingTest.run();
		var results = this.passingTest.results();
		expect(results.tests).toBeAnInstanceOf(Object);
	});

	it('should output correct number of passes and failures', function(expect){
		this.failingTest.run();
		var results = this.failingTest.results();
		expect(results.tests.failures).toBe(1);
		expect(results.tests.passes).toBe(2);
	});


});

};