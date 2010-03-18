/*
---
script: runner.flusspferd.js
description: spec runner for flusspferd
license: MIT-style license
authors:
- Mark Obcena
...
*/

// Add sources to require path
require.paths.unshift('./../Source/');

// Initialize objects
var Testigo = require('testigo').Testigo,
	Tests = new Testigo(),
	Runner = new Testigo.Runners.Simple('flusspferd', Tests);

// Import test cases
require('./tests').setup(Tests);

// Run tests
Runner.run();