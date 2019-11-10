"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fortmatic = _interopRequireDefault(require("fortmatic"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var key = 'pk_test_811EF9842FE79F43';
/* --- Component --- */

var useOpenBoxEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    try {
      if (state.isLoggingIn) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            // let fm = new Fortmatic(key);
            // const web3Instance = new Web3(fm.getProvider());
            console.log(window.web3Provider, 'window.web3Provider');
            var instance = yield state.static.openBox(window.ethereum.selectedAddress, window.web3Provider);
            var profile = yield state.static.getProfile(state.address);
            var list = yield state.static.listSpaces(state.address);
            var verified = yield state.static.getVerifiedAccounts(profile);
            var spaces = {};
            console.log(state, 'coool state');
            list.forEach(e => {
              spaces[e] = undefined;
            }); // Create empty space objects list.

            dispatch({
              type: 'OPEN_SUCCESS',
              profile,
              instance,
              spaces,
              verified
            });
            setDispatched(true);
          });

          return function runEffect() {
            return _ref.apply(this, arguments);
          };
        }();

        runEffect();
      }
    } catch (error) {
      dispatch({
        type: 'OPEN_FAILURE',
        err: error
      });
      setDispatched(false);
    }
  }, [state.isLoggingIn]);
  return dispatched;
};
/* --- Export --- */


var _default = useOpenBoxEffect;
exports.default = _default;