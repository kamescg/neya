"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeployERC20 = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _Context = _interopRequireDefault(require("../Context"));

var _ethers = require("ethers");

var _ERC20Detailed = _interopRequireDefault(require("../contracts/ERC20Detailed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DeployERC20View = (_ref) => {
  var {
    fortmatic
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fortmatic"]);

  var [loading, setLoading] = (0, _react.useState)(false);
  /**
   * @name ActionHandler
   */

  var actionHandler =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* () {
      setLoading(true);
      fortmatic.web3.eth.getAccounts(
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(function* (error, accounts) {
          if (error) throw error;
          var factory = yield new _ethers.ethers.ContractFactory(_ERC20Detailed.default.abi, _ERC20Detailed.default.bytecode);
          var tx = factory.getDeployTransaction('DEV', 'DEV', 18);
          console.log(tx, 'txtxtx');
          fortmatic.web3.eth.sendTransaction({
            from: accounts[0],
            data: tx.data
          });
        });

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });

    return function actionHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(Atom.Flex, null, _react.default.createElement(Atom.Button, {
    onClick: actionHandler
  }, loading ? 'Loading...' : 'Deploy Contract'));
};

var DeployERC20 = props => _react.default.createElement(_index.FortmaticContext, null, fortmatic => _react.default.createElement(Atom.Box, null, console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt'), _react.default.createElement(DeployERC20View, _extends({}, props, {
  fortmatic: fortmatic
}))));

exports.DeployERC20 = DeployERC20;