exports.setup = function(Tests){

var Spy = require('lib/spy').Spy;

Tests.describe('Spies', function(it){

	it('should be a function', function(expect){
		expect(new Spy(function(){})).toBeType('function');
		expect(new Spy(function(){})).not.toBeType('object');
	});

	it('should transparently return the same value as its original', function(expect){
		var obj = {};
		var orig = function(){
			return obj;
		};
		var spy = new Spy(orig);
		expect(spy()).toBe(obj);
		expect(spy()).toBe(orig());
	});

	it('should count invocations', function(expect){
		var orig = function(){};
		var spy = new Spy(orig);
		expect(spy.getCallCount()).toBe(0);

		spy();
		spy();
		spy();
		spy();
		expect(spy.getCallCount()).not.toBe(0);
		expect(spy.getCallCount()).toBe(4);
	});

	it('should save arguments', function(expect){
		var orig = function(){};
		var spy = new Spy(orig);
		expect(spy.getArgs().length).toBe(0);

		spy(2);
		spy(2);
		spy(2);
		expect(spy.getArgs().length).toBe(3);
		expect(spy.getArgs().length).not.toBe(0);
		expect(spy.getArgs()[0]).toBeLike([2]);
	});

	it('should count errors', function(expect){
		var orig = function(){
			throw new Error('Hello');
		};
		var spy = new Spy(orig);
		expect(spy.getErrorCount()).toBe(0);

		spy();
		spy();
		expect(spy.getErrorCount()).not.toBe(0);
		expect(spy.getErrorCount()).toBe(2);
	});

	it('should save error objects', function(expect){
		var orig = function(){
			throw new Error('Hello');
		};
		var spy = new Spy(orig);
		expect(spy.getErrors().length).toBe(0);

		spy();
		spy();
		expect(spy.getErrors().length).not.toBe(0);
		expect(spy.getErrors()[0].message).toBe('Hello');
	});

});

};
