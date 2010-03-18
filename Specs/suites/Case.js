exports.setup = function(Tests){

var Case = require('lib/case').Case;

Tests.describe('Cases', function(it, setup){

	setup('beforeEach', function(){
		var self = this;
		this.throwingTest = function(){
			new Case('descr', function(){});
		};
		this.failingTest = new Case('descr', function(expect){
			expect(1).toBe(1);
			expect.apply(null, [1]).toBeAnInstanceOf(Number);
			expect.call(null, 'mark').toBe('w');
			expect.apply;
			expect.call;
		});
		this.passingTest = new Case('descr', function(expect){
			self.innerExpect = expect;
			expect(1).toBe(1);
		}, {}, {
			'before': function(){
				self.beforeCallback = true;
			},
			'after': function(){
				self.afterCallback = true;
			}
		});
	});

	it('should error out if no `expect` named argument is declared', function(expect){
		var error = null;
		try {
			this.throwingTest();
		} catch(e){
			error = e;
		} finally {
			expect(error).toBeAnInstanceOf(Error);
			expect(error.message).toBe('Case function does not explicitly define an `expect` argument.');
		}
	});

	it('should pass an `expect` function', function(expect){
		this.passingTest.run();
		expect(this.innerExpect).toBeAnInstanceOf(Function);
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

	it('should fire `before` callbacks before running tests', function(expect){
		this.passingTest.run();
		expect(this.beforeCallback).toBeTrue();
	});

	it('should fire `after` callbacks when tests are done', function(expect){
		this.passingTest.run();
		expect(this.afterCallback).toBeTrue();
	});

});

};