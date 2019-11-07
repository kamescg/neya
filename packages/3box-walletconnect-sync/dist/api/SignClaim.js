"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignClaim = void 0;

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

var Rejected = function Rejected(props) {
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


var SignClaimView = function SignClaimView(_ref2) {
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
    // Draft Custom Request
    var customRequest = {
      id: 1337,
      jsonrpc: '2.0',
      method: '3id_signClaim',
      params: [{
        payload: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3',
        options: {
          DID: 'did:ethr:0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
          space: 'web3'
        }
      }]
    }; // Send transaction

    box.extensions.walletconnect.instance.sendCustomRequest(customRequest).then(function (result) {
      // Returns request result
      console.log(result);
      portal.openToast({
        label: 'Claim Signed',
        content: _react["default"].createElement(ApproveTransaction, null)
      });
    })["catch"](function (error) {
      // Error returned when rejected
      portal.openToast({
        label: 'Claim Rejected',
        status: 'failure'
      });
      console.error(error, 'rejected');
    });
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    onClick: sendHandler
  }, (0, _uiCompose.Component)(props.componentLoggedOut, _objectSpread({
    label: props.loggedOutLabel
  }, props.sxLoggedOut))), login.isDispatched && !login.isLoggedIn ? (0, _uiCompose.Component)(props.componentLoading, _objectSpread({
    label: props.loadingLabel
  }, props.sxLoading)) : null, login.isLoggedIn && _react["default"].createElement("span", null, props.children || (0, _uiCompose.Component)(props.componentLoggedIn, _objectSpread({
    label: props.loggedInLabel
  }, props.sxLoggedIn))));
};

SignClaimView.defaultProps = {
  loggedOutLabel: 'Sign Claim',
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

var SignClaim = function SignClaim(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(SignClaimView, props));
};

exports.SignClaim = SignClaim;