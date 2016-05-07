'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Database classe
 * 
 */

var Database = function () {
	function Database() {
		var host = arguments.length <= 0 || arguments[0] === undefined ? '127.0.0.1' : arguments[0];
		var dbname = arguments.length <= 1 || arguments[1] === undefined ? 'test' : arguments[1];
		(0, _classCallCheck3.default)(this, Database);

		this.dbname = dbname;
		this.host = host;

		_mongoose2.default.connect('mongodb://' + this.host + '/' + this.dbname);
		_mongoose2.default.disconnect();
	}

	(0, _createClass3.default)(Database, [{
		key: 'testConnection',
		value: function testConnection() {
			console.log('Test de la connexion...');
			return true;
		}
	}]);
	return Database;
}();

exports.default = Database;