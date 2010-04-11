exports.setup = function(Tests){

var Suite = require('lib/suite').Suite;

Tests.describe('Suites', function(it, setup){

	setup('beforeEach', function(){

	});

	it('should throw a syntax error if no `it` named argument is declared', function(expect){
		var error = null;
		try {
			new Suite('Fail', function(){});
		} catch(e){
			error = e;
		} finally {
			expect(error).toBeAnInstanceOf(SyntaxError);
			expect(error.message).toBe('Suite function does not explicitly define an `it` argument.');
		}
	});

	it('should pass an `it` and `setup` function', function(expect){
		expect.perform(2);
		new Suite('Pass', function(it, setup){
			expect(it).toBeAnInstanceOf(Function);
			expect(setup).toBeAnInstanceOf(Function);
		}).run();
	});

});

};