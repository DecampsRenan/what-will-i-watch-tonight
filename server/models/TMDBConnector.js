'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _nodeRestClient = require('node-rest-client');

var _nodeRestClient2 = _interopRequireDefault(_nodeRestClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rest = new _nodeRestClient2.default();

/**
 * Wrapper class
 * TODO: make a data cache (like config request, we need that only once)
 */

var TMDBConnector = function () {
  function TMDBConnector(apiKey) {
    (0, _classCallCheck3.default)(this, TMDBConnector);

    this.key = apiKey;
  }

  (0, _createClass3.default)(TMDBConnector, [{
    key: 'getMoviesFromTitle',
    value: function getMoviesFromTitle(title) {
      // Affichage des propriétés de la bibliothèque tmdbv3

    }
  }]);
  return TMDBConnector;
}();

exports.default = TMDBConnector;