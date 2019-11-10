"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FortmaticProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "FortmaticContext", {
  enumerable: true,
  get: function get() {
    return _WithContext.default;
  }
});
Object.defineProperty(exports, "FortmaticInject", {
  enumerable: true,
  get: function get() {
    return _WithContextInjected.default;
  }
});
Object.defineProperty(exports, "Fortmatic", {
  enumerable: true,
  get: function get() {
    return _fortmatic.default;
  }
});
Object.defineProperty(exports, "SendTransaction", {
  enumerable: true,
  get: function get() {
    return _SendTransaction.SendTransaction;
  }
});
Object.defineProperty(exports, "DeployERC20", {
  enumerable: true,
  get: function get() {
    return _DeployERC.DeployERC20;
  }
});
Object.defineProperty(exports, "TokenTransfer", {
  enumerable: true,
  get: function get() {
    return _TokenTransfer.TokenTransfer;
  }
});

var Effects = _interopRequireWildcard(require("./effects"));

var _Provider = _interopRequireDefault(require("./Provider"));

var _WithContext = _interopRequireDefault(require("./WithContext"));

var _WithContextInjected = _interopRequireDefault(require("./WithContextInjected"));

var _fortmatic = _interopRequireDefault(require("fortmatic"));

var _SendTransaction = require("./components/SendTransaction");

var _DeployERC = require("./components/DeployERC20");

var _TokenTransfer = require("./components/TokenTransfer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }