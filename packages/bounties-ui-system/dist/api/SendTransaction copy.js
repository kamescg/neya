"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendTransaction = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _uiCompose = require("@horizin/ui-compose");

var _effects = require("./effects");

var _designSystemOrganisms = require("@horizin/design-system-organisms");

var _reactPortalSystem = require("react-portal-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* ---  Sub-Component --- */
var Tag = function Tag(_ref) {
  var label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["label"]);
  return _react["default"].createElement(_designSystemAtoms.Button, props, label);
};

var ApproveTransaction = function ApproveTransaction(props) {
  return _react["default"].createElement(Atom.Flex, null, _react["default"].createElement(Atom.Button, {
    green: true,
    sm: true
  }, "Dispatch"), _react["default"].createElement(Atom.Button, {
    sm: true,
    sx: {
      ml: 2
    }
  }, "Delete"));
};
/* --- Component --- */


var SendTransactionView = function SendTransactionView(_ref2) {
  var box = _ref2.box,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["box"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      resultStatus = _useState2[0],
      setResultStatus = _useState2[1];

  var portal = (0, _react.useContext)(_reactPortalSystem.PortalContext);
  var enabled = (0, _effects.useEnableEffect)(box);
  var login = (0, _effects.useOpenRequestEffect)(box);

  var sendHandler = function sendHandler() {
    // Draft transaction
    var tx = {
      from: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3',
      // Required
      to: '0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359',
      // Required (for non contract deployments)
      data: '0x',
      // Required
      gasPrice: '0x02540be400',
      // Optional
      gasLimit: '0x9c40',
      // Optional
      value: '0x00',
      // Optional
      nonce: '0x0114' // Optional

    }; // Send transaction

    box.extensions.walletconnect.instance.sendTransaction(tx).then(function (result) {
      // Returns transaction id (hash)
      console.log(result);
      setResultStatus(result);
      portal.openToast({
        label: 'Transaction Signed',
        content: _react["default"].createElement(ApproveTransaction, null)
      });
    })["catch"](function (error) {
      // Error returned when rejected
      console.error(error);
    });
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    onClick: sendHandler
  }, (0, _uiCompose.Component)(props.componentLoggedOut, _objectSpread({
    label: props.loggedOutLabel
  }, props.sxLoggedOut))), resultStatus && _react["default"].createElement(_designSystemOrganisms.Toast, {
    content: _react["default"].createElement("div", null, "Transaction Confirmed")
  }), login.isDispatched && !login.isLoggedIn ? (0, _uiCompose.Component)(props.componentLoading, _objectSpread({
    label: props.loadingLabel
  }, props.sxLoading)) : null, login.isLoggedIn && _react["default"].createElement("span", null, props.children || (0, _uiCompose.Component)(props.componentLoggedIn, _objectSpread({
    label: props.loggedInLabel
  }, props.sxLoggedIn))));
};

SendTransactionView.defaultProps = {
  loggedOutLabel: 'Send Transaction',
  loadingLabel: 'ΞID Loading...',
  loggedInLabel: 'ΞID Active',
  componentLoggedOut: Tag,
  componentLoading: Tag,
  componentLoggedIn: Tag,
  display: 'tag',
  sxLoggedOut: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxLoggedIn: {
    pointer: true,
    tag: true
  }
};

var SendTransaction = function SendTransaction(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(SendTransactionView, props));
};

exports.SendTransaction = SendTransaction;