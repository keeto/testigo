exports.setup = function(Tests){

var Suite = require('lib/suite').Suite;

Tests.describe('Suites', function(it, setup){

	setup('beforeEach', function(){

	});

	it('should error out if no `it` named argument is declared', function(expect){
		var error = null;
		try {
			new Suite('Fail', function(){});
		} catch(e){
			error = e;
		} finally {
			expect(error).toBeAnInstanceOf(Error);
			expect(error.message).toBe('Suite function does not explicitly define an `it` argument.');
		}
	});

	it('should pass an `it` and `setup` function', function(expect){
		new Suite('Pass', function(it, setup){
			expect(it).toBeAnInstanceOf(Function);
			expect(setup).toBeAnInstanceOf(Function);
		}).run();
	});

});

};