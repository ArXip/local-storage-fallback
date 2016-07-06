'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hasStorage = require('./hasStorage');

var _hasStorage2 = _interopRequireDefault(_hasStorage);

var _CookieStorage = require('./CookieStorage');

var _CookieStorage2 = _interopRequireDefault(_CookieStorage);

var _MemoryStorage = require('./MemoryStorage');

var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = null;

if ((0, _hasStorage2.default)('localStorage')) {
  // use localStorage
  storage = window.localStorage;
} else if ((0, _hasStorage2.default)('sessionStorage')) {
  // use sessionStorage
  storage = window.sessionStorage;
} else if ((0, _CookieStorage.hasCookies)()) {
  // use cookies
  storage = new _CookieStorage2.default();
} else {
  // use memory
  storage = new _MemoryStorage2.default();
}

exports.default = storage;