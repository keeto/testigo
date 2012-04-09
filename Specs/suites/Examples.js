exports.setup = function(Tests){

Tests.describe('Examples', function(it, setup){

	setup('beforeEach', function(){
		this.number = 100;
		this.str = 'testigo';
	});

	it('should handle simple tests', function(expect){
		expect(this.number).toBe(100);
	});

	it('should handle async functions', function(expect){
		var str = this.str;
		setTimeout(function(){
			expect(str).toEqual('testigo');
		}, 1200);
	});

});

};
