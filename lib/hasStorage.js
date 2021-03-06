'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasStorage;
var TEST_KEY = '__test';

function hasStorage() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? 'localStorage' : arguments[0];

  try {
    var storage = window[name];
    storage.setItem(TEST_KEY, '1');
    storage.removeItem(TEST_KEY);
    return true;
  } catch (e) {
    return false;
  }
}