require.paths.unshift('./../Source/');

var Testigo = require('testigo').Testigo,
	Tests = new Testigo(),
	Runner = new Testigo.Runners.Simple('flusspferd', Tests);

require('./suites/Utils').setup(Tests);
require('./suites/Expectation').setup(Tests);
require('./suites/Case').setup(Tests);

Runner.run();