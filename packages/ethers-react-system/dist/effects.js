"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ethers = require("ethers");

var _utilities = require("./utilities");

var _types = require("./actions/types");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var effects = (callUseEffect, state, dispatch) => {
  // /**
  //  * @function EthereumEnable
  //  */
  callUseEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable();
    }
  }, [state.enable]);
  /**
   * @function ProviderMonitor
   */

  callUseEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          injected: window.web3.currentProvider,
          mainnet: _ethers.ethers.getDefaultProvider(),
          rinkeby: _ethers.ethers.getDefaultProvider('rinkeby')
        }
      });
    } else {
      dispatch({
        type: 'SET_PROVIDER_STATUS',
        payload: undefined
      });
    }
  }, [window.web3 && window.web3.currentProvider]);
  /**
   * @function SetAddress
   */

  callUseEffect(() => {
    var address = window.ethereum && window.ethereum.selectedAddress;

    if (address) {
      try {
        dispatch({
          type: 'SET_ADDRESS',
          input: address
        });
      } catch (error) {
        dispatch({
          type: 'SET_ADDRESS_FAILURE',
          input: error
        });
      }
    }
  }, [window.ethereum && window.ethereum.selectedAddress]);
  /**
   * @function SetWallet
   */

  callUseEffect(() => {
    if (state.address && !state.wallet) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          try {
            var provider = (0, _utilities.networkRouting)('metamask');
            var wallet = provider.getSigner();
            var newContracts = (0, _utilities.generateNewContracts)(state.contracts, wallet);
            dispatch({
              type: _types.SET_WALLET,
              payload: {
                wallet,
                address: state.address,
                contracts: newContracts
              }
            });
          } catch (error) {// dispatch({
            //   type: 'SET_WALLET_FAILURE',
            //   payload: error
            // });
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.address]);
  /**
   * @function SignMessage
   * @description SIGN_MESSAGE_REQUEST
   */

  callUseEffect(() => {
    if (state.provider && state.wallet && state.store.messages && state.store.messages.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(function* () {
          var messageRequest = state.store.messages[0];

          try {
            var signature;

            switch (messageRequest.type) {
              case 'SIGN_TYPED_MESSAGE_REQUEST':
                signature = yield state.provider.injected.send('eth_signTypedData', [messageRequest.payload, state.address]);
                break;

              default:
                signature = yield state.wallet.signMessage(messageRequest.payload);
                break;
            }

            if (signature) {
              dispatch({
                type: 'SIGN_MESSAGE_SUCCESS',
                id: messageRequest.id,
                payload: messageRequest.payload,
                signature
              });
            }
          } catch (error) {
            console.log(error);
            dispatch({
              type: 'SIGN_MESSAGE_FAILURE',
              input: {
                id: messageRequest.id,
                error
              }
            });
          }
        });

        return function runEffect() {
          return _ref2.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.messages, state.provider, state.wallet]);
  /**
   * @function DeployContract
   * @description SIGN_MESSAGE_REQUEST
   */

  callUseEffect(() => {
    if (state.store.deploy && state.store.deploy.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(function* () {
          var contract, deployed, transaction;
          var request = state.store.deploy[0];
          var {
            payload
          } = request;

          try {
            var wallet = state.wallet;

            if (wallet) {
              contract = new _ethers.ethers.ContractFactory(payload.contract.abi, payload.contract.bytecode, wallet);
              transaction = contract.getDeployTransaction(...payload.values);
              deployed = yield wallet.sendTransaction(transaction);
              dispatch({
                type: 'DEPLOY_CONTRACT_SUCCESS',
                id: request.id,
                delta: request.id,
                payload: deployed
              });
            }
          } catch (error) {
            console.log(error);
          }
        });

        return function runEffect() {
          return _ref3.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.deploy]);
  /**
   * @function LoadContract
   * @description LOAD_CONTRACT_INTO_LIBRARY_REQUEST
   */

  callUseEffect(() => {
    if (state.store.library && state.store.library.length > 0) {
      var request = state.store.library[0];

      if ((0, _utilities.isAddress)(request.address)) {
        dispatch({
          type: 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS',
          id: request.id,
          payload: request.payload
        });
      } else {
        dispatch({
          type: 'LOAD_CONTRACT_INTO_LIBRARY_FAILURE',
          id: request.id,
          payload: 'Invalid smart contract address.'
        });
      }
    }
  }, [state.wallet, state.store.contracts]);
};

var _default = effects;
exports.default = _default;