'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.createActionTypes = createActionTypes;

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionType = exports.ActionType = Symbol('ActionType');

/**
 * Creates a map of action types with optional nested namespace support.
 *
 * @param {object} spec The action type specification.
 * @param {object} [options] The options.
 * @param {string} [options.namespace] The starter namespace.
 * @param {string} [options.separator='.'] The namespace separator.
 * @return {object} Returns a map of action types.
 */
function createActionTypes(spec) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var namespace = _ref.namespace;
  var _ref$separator = _ref.separator;
  var separator = _ref$separator === undefined ? '.' : _ref$separator;

  if (!(0, _lodash2.default)(spec)) {
    throw new Error('param "spec" is not an object');
  }
  if (namespace && typeof namespace !== 'string') {
    throw new Error('option "namespace" is not a string');
  }
  if (typeof separator !== 'string') {
    throw new Error('option "separator" is not a string');
  }

  return Object.keys(spec).reduce(function (result, key) {
    var value = spec[key];
    var namespacedKey = namespace ? '' + namespace + separator + key : key;

    if (value === ActionType) {
      return (0, _extends5.default)({}, result, (0, _defineProperty3.default)({}, key, namespacedKey));
    }
    if ((0, _lodash2.default)(value)) {
      return (0, _extends5.default)({}, result, (0, _defineProperty3.default)({}, key, createActionTypes(value, {
        namespace: namespacedKey,
        separator: separator
      })));
    }

    throw new Error('value of key "' + key + '" of param "spec" is invalid');
  }, {});
}