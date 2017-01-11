// This file is not transpiled so we must use commonJs and ES5 syntax like require
// Ask for babel to do the transpilation before startign the test

require ('babel-register')();

//Disable webpack specific syntax which Mocha does not understand
require.extensions['.css'] = function() {};
