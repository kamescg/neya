"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenTransfer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _Context = _interopRequireDefault(require("../Context"));

var _ethers = require("ethers");

var _ERC20Detailed = _interopRequireDefault(require("../contracts/ERC20Detailed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TokenTransferView = (_ref) => {
  var {
    fortmatic
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fortmatic"]);

  var [loading, setLoading] = (0, _react.useState)(false);
  /**
   * @name ActionHandler
   */

  var actionHandler = () => {
    setLoading(true);
    console.log(fortmatic.web3.eth, 'fortmatic.web3.ethfortmatic.web3.eth');
    var tokenContract = fortmatic.web3.eth.contract(_ERC20Detailed.default.abi); // Instantiate contract

    var tokenContractInstance = tokenContract.at('0x8EBC7785b83506AaA295Bd9174e6A7Ad5681fb80');
    var toAddress = '0xE0cef4417a772512E6C95cEf366403839b0D6D6D'; // Calculate contract compatible value for transferFrom with proper decimal points using BigNumber

    var tokenDecimals = web3.toBigNumber(18);
    var tokenAmountToTransferFrom = web3.toBigNumber(18);
    var calculatedTransferFromValue = web3.toHex(tokenAmountToTransferFrom.mul(web3.toBigNumber(10).pow(tokenDecimals))); // Get user account wallet address first

    web3.eth.getAccounts(function (error, accounts) {
      if (error) throw error; // Send ERC20 transaction with web3

      tokenContractInstance.transfer.sendTransaction(toAddress, calculatedTransferFromValue, {
        from: accounts[0]
      }, function (error, txnHash) {
        if (error) throw error;
        console.log(txnHash);
      });
    });
  };

  return _react.default.createElement(Atom.Flex, null, _react.default.createElement(Atom.Button, {
    onClick: actionHandler
  }, loading ? 'Loading...' : 'Transfer Tokens'));
};

var TokenTransfer = props => _react.default.createElement(_index.FortmaticContext, null, fortmatic => _react.default.createElement(Atom.Box, null, console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt'), _react.default.createElement(TokenTransferView, _extends({}, props, {
  fortmatic: fortmatic
}))));

exports.TokenTransfer = TokenTransfer;