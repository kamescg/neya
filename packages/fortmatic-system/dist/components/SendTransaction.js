"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendTransaction = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _Context = _interopRequireDefault(require("../Context"));

var _ethers = require("ethers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SendTransactionView = (_ref) => {
  var {
    fortmatic
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fortmatic"]);

  var actionHandler = () => {
    // TODO: Step 3: Send Transaction Implementation
    // console.log(fortmatic, props, 'accccttion');
    fortmatic.web3.eth.sendTransaction({
      // From address will automatically be replaced by the address of current user
      from: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
      to: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
      // value: fortmatic.web3.utils.toWei(1, 'ether')
      value: _ethers.utils.parseEther('1.0')
    }, () => {}); // End Step 3
  };

  return _react.default.createElement(Atom.Flex, null, _react.default.createElement(Atom.Button, {
    onClick: actionHandler
  }, "Send Transaction"));
}; // export const SendTransaction = props => (
//   <FortmaticInject>
//     <SendTransactionView {...props} />
//   </FortmaticInject>
// );


var SendTransaction = props => _react.default.createElement(_index.FortmaticContext, null, fortmatic => _react.default.createElement(Atom.Box, null, console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt'), _react.default.createElement(SendTransactionView, _extends({}, props, {
  fortmatic: fortmatic
}))));

exports.SendTransaction = SendTransaction;