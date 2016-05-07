'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _root = require('./routes/root');

var _root2 = _interopRequireDefault(_root);

var _movie = require('./routes/movie');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes


var PORT = process.env.npm_package_config_port; // Liste des imports


var app = (0, _express2.default)();

// Paramètres applicatifs globaux
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Définition des middleware globaux
app.use((0, _helmet2.default)());
app.use((0, _compression2.default)());
app.use('/assets', _express2.default.static(__dirname + '/public'));

// Définition des routes
app.use('/', _root2.default);
app.use('/movie', _movie2.default);

// Définition de la gestion des erreurs
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('error', { error: err });
});

app.listen(PORT, function () {
	console.log('App listening on 127.0.0.1:' + PORT);
	console.log('Press ctrl-c to stop.');
});