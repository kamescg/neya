"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBot = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSimpleChatbot = _interopRequireDefault(require("react-simple-chatbot"));

var steps = [{
  id: '0',
  message: 'Welcome to react chatbot!',
  trigger: '1'
}, {
  id: '1',
  message: 'Bye!',
  end: true
}];

var ChatBot = _react["default"].createElement(_reactSimpleChatbot["default"], {
  steps: steps
});

exports.ChatBot = ChatBot;