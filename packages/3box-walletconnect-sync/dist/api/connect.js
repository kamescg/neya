"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _browser = _interopRequireDefault(require("@walletconnect/browser"));

var _qrcodeModal = _interopRequireDefault(require("@walletconnect/qrcode-modal"));

// Create a walletConnector
var walletConnector = new _browser["default"]({
  bridge: 'https://bridge.walletconnect.org' // Required

});

if (!walletConnector.connected) {
  walletConnector.createSession().then(function () {
    var uri = walletConnector.uri;

    _qrcodeModal["default"].open(uri, function () {
      console.log('QR Code Modal closed');
    });
  });
} // Subscribe to connection events


walletConnector.on('connect', function (error, payload) {
  if (error) {
    throw error;
  }

  _qrcodeModal["default"].close();

  var _payload$params$ = payload.params[0],
      accounts = _payload$params$.accounts,
      chainId = _payload$params$.chainId;
});
walletConnector.on('session_update', function (error, payload) {
  if (error) {
    throw error;
  }

  var _payload$params$2 = payload.params[0],
      accounts = _payload$params$2.accounts,
      chainId = _payload$params$2.chainId;
});
walletConnector.on('disconnect', function (error, payload) {
  if (error) {
    throw error;
  }
});