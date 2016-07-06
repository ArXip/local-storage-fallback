'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hasCookies = hasCookies;

var _browserCookieLite = require('browser-cookie-lite');

var _browserCookieLite2 = _interopRequireDefault(_browserCookieLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieStorage = function () {
  function CookieStorage() {
    _classCallCheck(this, CookieStorage);
  }

  _createClass(CookieStorage, [{
    key: 'getItem',
    value: function getItem(key) {
      return (0, _browserCookieLite2.default)(key);
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      return (0, _browserCookieLite2.default)(key, value);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return (0, _browserCookieLite2.default)(key, '', -1);
    }
  }, {
    key: 'clear',
    value: function clear() {
      return false;
    }
  }]);

  return CookieStorage;
}();

exports.default = CookieStorage;
function hasCookies() {
  try {
    var TEST_KEY = '__test';
    (0, _browserCookieLite2.default)(TEST_KEY, '1');
    var value = (0, _browserCookieLite2.default)(TEST_KEY);

    return value == '1';
  } catch (e) {
    return false;
  }
}