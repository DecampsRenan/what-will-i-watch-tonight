'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movie = _express2.default.Router();

movie.get('/', function (req, res) {
	res.render('movies');
});

// Export the default route
exports.default = movie;