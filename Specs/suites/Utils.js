exports.setup = function(Tests){

var utils = require('lib/utils');

Tests.describe('Utils: typeOf', function(it){

	var typeOf = utils.typeOf;

	it('should be a function', function(expect){
		expect(typeof typeOf).toBe('function');
	});

	it('should match native types', function(expect){
		expect(typeOf('abc')).toBe('string');
		expect(typeOf(123)).toBe('number');
		expect(typeOf(true)).toBe('boolean');
	});

	it('should match object types', function(expect){
		expect(typeOf({})).toBe('object');
		expect(typeOf([])).toBe('array');
		expect(typeOf(function(){})).toBe('function');
		expect(typeOf(/m/)).toBe('regexp');
	});

});

Tests.describe('Utils: instanceOf', function(it){

	var instanceOf = utils.instanceOf;

	it('should be a function', function(expect){
		expect(typeof instanceOf).toBe('function');
	});

	it('should match native types', function(expect){
		expect(instanceOf('abc', String)).toBeTrue();
		expect(instanceOf(123, Number)).toBeTrue();
		expect(instanceOf(true, Boolean)).toBeTrue();
	});

	it('should match object types', function(expect){
		expect(instanceOf({}, Object)).toBeTrue();
		expect(instanceOf([], Array)).toBeTrue();
		expect(instanceOf(function(){}, Function)).toBeTrue();
		expect(instanceOf(/m/, RegExp)).toBeTrue();
	});

});

};