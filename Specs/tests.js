exports.setup = function(Testigo){

	require('./suites/Utils').setup(Testigo);
	require('./suites/Expectation').setup(Testigo);
	require('./suites/Case').setup(Testigo);
	require('./suites/Suite').setup(Testigo);

};