'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Database = require('../models/Database');

var _Database2 = _interopRequireDefault(_Database);

var _TMDBConnector = require('../models/TMDBConnector');

var _TMDBConnector2 = _interopRequireDefault(_TMDBConnector);

var _Movie = require('../models/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api_key = 'aa8c5d72c88b2ae88064143848dd8dc1';

var route = _express2.default.Router();

route.get('/', function (req, res) {
	var tmdb = new _TMDBConnector2.default(api_key);
	var interstellar = tmdb.getMoviesFromTitle('Interstellar');
	console.log(interstellar);
	res.render('movies');
});

route.get('/db', function (req, res) {

	var db = new _Database2.default('localhost', 'movies');
	db.testConnection();

	res.render('dbtest', {});
});

exports.default = route;