require.paths.push('./../Source/');

var Testigo = require('testigo').Testigo,
	Tests = new Testigo(),
	Runner = new Testigo.Runners.Simple('v8cgi', Tests);

require('./suites/Utils').setup(Tests);
require('./suites/Expectation').setup(Tests);
require('./suites/Case').setup(Tests);

Runner.run();