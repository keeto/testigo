/*
---
script: runner.v8cgi.js
description: spec runner for v8cgi
license: MIT-style license
authors:
- Mark Obcena
...
*/

// Add sources to require path
require.paths.push('./../Source/');

// Initialize objects
var Testigo = require('testigo').Testigo,
	Tests = new Testigo(),
	Runner = new Testigo.Runners.Simple('v8cgi', Tests);

// Import test cases
require('./tests').setup(Tests);

// Run tests
Runner.run();
