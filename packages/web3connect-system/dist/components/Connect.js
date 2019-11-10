"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = void 0;

var _react = _interopRequireDefault(require("react"));

var _web = _interopRequireDefault(require("web3"));

var _web3connect = _interopRequireDefault(require("web3connect"));

var _web3Provider = _interopRequireDefault(require("@walletconnect/web3-provider"));

var _ethers = require("ethers");

var _fortmatic = _interopRequireDefault(require("fortmatic"));

var _torusEmbed = _interopRequireDefault(require("@toruslabs/torus-embed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Connect = props => _react.default.createElement(_web3connect.default.Button, {
  network: "mainnet" // optional
  ,
  style: {
    padding: 4
  },
  providerOptions: {
    walletconnect: {
      package: _web3Provider.default,
      // required
      options: {
        infuraId: '99aa5c18ffcd4d6a83bb9c4d911d9e7d' // required

      }
    },
    fortmatic: {
      package: _fortmatic.default,
      // required
      options: {
        key: 'pk_test_811EF9842FE79F43' // required

      }
    },
    torus: {
      package: _torusEmbed.default,
      // required
      options: {
        enableLogging: false,
        // optional
        buttonPosition: 'bottom-left',
        // optional
        buildEnv: 'production',
        // optional
        showTorusButton: true,
        // optional
        enabledVerifiers: {
          // optional
          google: false // optional

        }
      }
    }
  },
  onConnect:
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(function* (provider) {
      var web3 = yield new _ethers.ethers.providers.Web3Provider(provider); // add provider to web3

      window.web3Injected = web3;
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(),
  onClose: () => {
    console.log('Web3Connect Modal Closed'); // modal has closed
  }
});

exports.Connect = Connect;