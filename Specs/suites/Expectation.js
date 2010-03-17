exports.setup = function(Tests){

var Expectation = require('lib/expectation').Expectation;

Tests.describe('Expectations', function(it, setup){

	setup('beforeEach', function(){
		this.mockObj = {};
		this.mockArray = [];
		this.mockFunction = function(){};
		this.mockRegExp = /^$/;
		this.mockDate = new Date();

		this.strExp = new Expectation('abc');
		this.numExp = new Expectation(1);
		this.boolExp = new Expectation(true);
		this.objExp = new Expectation(this.mockObj);
		this.arrExp = new Expectation(this.mockArray);
		this.fnExp = new Expectation(this.mockFunction);
		this.regExp = new Expectation(this.mockRegExp);
		this.dateExp = new Expectation(this.mockDate);
	});

	it('should have a `not` object', function(expect){
		expect(this.strExp.not).toBeAnInstanceOf(Object);
	});

	it('should match toBe and not.toBe', function(expect){
		expect(this.boolExp.toBe(true)).toBeTrue();
		expect(this.numExp.toBe(1)).toBeTrue();
		expect(this.objExp.toBe(this.mockObj)).toBeTrue();

		expect(this.boolExp.not.toBe(false)).toBeTrue();
		expect(this.numExp.not.toBe(2)).toBeTrue();
		expect(this.objExp.not.toBe({})).toBeTrue();
	});

	it('should match toEqual and not.toEqual', function(expect){
		expect(this.boolExp.toEqual(true)).toBeTrue();
		expect(this.numExp.toEqual(1)).toBeTrue();
		expect(this.objExp.toEqual(this.mockObj)).toBeTrue();

		expect(this.boolExp.not.toEqual(false)).toBeTrue();
		expect(this.numExp.not.toEqual(2)).toBeTrue();
		expect(this.objExp.not.toEqual({})).toBeTrue();
	});

	it('should match toBeType', function(expect){
		expect(this.boolExp.toBeType('boolean')).toBeTrue();
		expect(this.numExp.toBeType('number')).toBeTrue();
		expect(this.strExp.toBeType('string')).toBeTrue();
		expect(this.objExp.toBeType('object')).toBeTrue();
		expect(this.arrExp.toBeType('array')).toBeTrue();
		expect(this.fnExp.toBeType('function')).toBeTrue();
		expect(this.regExp.toBeType('regexp')).toBeTrue();
		expect(this.dateExp.toBeType('date')).toBeTrue();
	});

	it('should match instanceOf for native objects', function(expect){
		expect(this.numExp.toBeAnInstanceOf(Number)).toBeTrue();
		expect(this.strExp.toBeAnInstanceOf(String)).toBeTrue();
		expect(this.boolExp.toBeAnInstanceOf(Boolean)).toBeTrue();
		expect(this.objExp.toBeAnInstanceOf(Object)).toBeTrue();
		expect(this.arrExp.toBeAnInstanceOf(Array)).toBeTrue();
		expect(this.fnExp.toBeAnInstanceOf(Function)).toBeTrue();
		expect(this.regExp.toBeAnInstanceOf(RegExp)).toBeTrue();
		expect(this.dateExp.toBeAnInstanceOf(Date)).toBeTrue();
	});

	it('should match instanceOf for classes', function(expect){
		var Klass = function(){};
		var instance = new Klass();
		expect(new Expectation(instance).toBeAnInstanceOf(Klass)).toBeTrue();
	});

});

};