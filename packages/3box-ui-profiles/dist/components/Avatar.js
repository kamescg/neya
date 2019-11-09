"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _ProfileImage = require("./ProfileImage");

/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 */

/* --- Global --- */
var AvatarView = function AvatarView(_ref) {
  var sx = _ref.sx,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["sx"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ProfileImage.ProfileImage, {
    sx: sx,
    opacity: 1
  }));
};

var Avatar = function Avatar(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(AvatarView, props));
};

exports.Avatar = Avatar;