'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hasCookies = hasCookies;

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var prefix = 'lS_';

var CookieStorage = function () {
  function CookieStorage() {
    _classCallCheck(this, CookieStorage);
  }

  _createClass(CookieStorage, [{
    key: 'getItem',
    value: function getItem(key) {
      var cookies = _cookie2.default.parse(document.cookie);
      if (!cookies || !cookies.hasOwnProperty(prefix + key)) {
        return null;
      }
      return cookies[prefix + key];
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      document.cookie = _cookie2.default.serialize(prefix + key, value, {
        path: '/'
      });
      return value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      document.cookie = _cookie2.default.serialize(prefix + key, '', {
        path: '/',
        maxAge: -1
      });
      return null;
    }
  }, {
    key: 'clear',
    value: function clear() {
      var cookies = _cookie2.default.parse(document.cookie);
      for (var key in cookies) {
        if (key.indexOf(prefix) === 0) {
          this.removeItem(key.substr(prefix.length));
        }
      }

      return null;
    }
  }]);

  return CookieStorage;
}();

exports.default = CookieStorage;
function hasCookies() {
  var _CookieStorage$protot = CookieStorage.prototype;
  var setItem = _CookieStorage$protot.setItem;
  var getItem = _CookieStorage$protot.getItem;
  var removeItem = _CookieStorage$protot.removeItem;


  try {
    var TEST_KEY = '__test';
    setItem(TEST_KEY, '1');
    var value = getItem(TEST_KEY);
    removeItem(TEST_KEY);

    return value == '1';
  } catch (e) {
    return false;
  }
}