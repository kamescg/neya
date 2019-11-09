"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _uiCompose = require("@horizin/ui-compose");

var _effects = require("./effects");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* ---  Sub-Component --- */
var Tag = function Tag(_ref) {
  var label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["label"]);
  return _react["default"].createElement(_designSystemAtoms.Button, props, label);
};
/* --- Component --- */


var LoginView = function LoginView(_ref2) {
  var box = _ref2.box,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["box"]);
  var enabled = (0, _effects.useEnableEffect)(box);
  var login = (0, _effects.useOpenRequestEffect)(box);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    onClick: box.login
  }, (0, _uiCompose.Component)(props.componentLoggedOut, _objectSpread({
    label: props.loggedOutLabel
  }, props.sxLoggedOut))), login.isDispatched && !login.isLoggedIn ? (0, _uiCompose.Component)(props.componentLoading, _objectSpread({
    label: props.loadingLabel
  }, props.sxLoading)) : null, login.isLoggedIn && _react["default"].createElement("span", null, props.children || (0, _uiCompose.Component)(props.componentLoggedIn, _objectSpread({
    label: props.loggedInLabel
  }, props.sxLoggedIn))));
};

LoginView.defaultProps = {
  loggedOutLabel: 'ΞID Login',
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

var Login = function Login(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(LoginView, props));
};

exports.Login = Login;