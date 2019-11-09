"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useThreadListenEffect = exports.useThreadPostDeleteRequestEffect = exports.useThreadReadyEffect = exports.useThreadJoinEffect = exports.useThreadPostStatusEffect = exports.useStorageDeleteRequestEffect = exports.useStorageInsertRequestEffect = exports.useStorageRemoveRequestEffect = exports.useStorageSelectorEffect = exports.useStorageSetStatusEffect = exports.useSpaceOpenRequestEffect = exports.useSpaceReadyEffect = exports.useLoggedInEffect = exports.useOpenRequestEffect = exports.useEnableEffect = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = require("react");

/**
 * @name 3BoxSystemEffects
 * @description 3Box interface side effect management.
 * - useLoggedInEffect
 * - useSpaceReadyEffect
 * - useOpenRequestEffect
 * - useSpaceOpenRequestEffect
 * - useStorageDeleteRequestEffect
 * - useThreadJoinEffect
 * - useThreadReadyEffect
 * - useThreadPostDeleteRequestEffect
 */

/**
 * @function useEnableEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */
var useEnableEffect = function useEnableEffect(state) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isEnabled = _useState2[0],
      setEnabled = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isDispatched = _useState4[0],
      setDispatched = _useState4[1];

  (0, _react.useEffect)(function () {
    if (state.isEnableRequested) setDispatched(true);
  }, [state.isEnableRequested]);
  (0, _react.useEffect)(function () {
    if (state.isEnableSuccess) setEnabled(true);
  }, [state.isEnableSuccess]);
  return {
    ready: isEnabled,
    dispatched: isDispatched
  };
};
/**
 * @function useOpenRequestEffect
 * @description Dispatch 3Box open request.
 * @returns {Object} 3Box Open Status (Request, Success, Failure)
 */


exports.useEnableEffect = useEnableEffect;

var useOpenRequestEffect = function useOpenRequestEffect(state, props) {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isEnabled = _useState6[0],
      setEnabled = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isDispatched = _useState8[0],
      setDispatched = _useState8[1];

  (0, _react.useEffect)(function () {
    setDispatched(state.isLoggingIn);
  }, [state.isLoggingIn]);
  (0, _react.useEffect)(function () {
    setEnabled(state.isLoggedIn);
    setDispatched(false);
  }, [state.isLoggedIn]);
  return {
    isDispatched: isDispatched,
    isLoggedIn: isEnabled,
    ready: isEnabled
  };
};
/**
 * @function useLoggedInEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */


exports.useOpenRequestEffect = useOpenRequestEffect;

var useLoggedInEffect = function useLoggedInEffect(box) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isReady = _useState10[0],
      setIsReady = _useState10[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.isLoggedIn]);
  return isReady;
};
/**
 * @function useSpaceReadyEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useLoggedInEffect = useLoggedInEffect;

var useSpaceReadyEffect = function useSpaceReadyEffect(box, props) {
  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      isReady = _useState12[0],
      setIsReady = _useState12[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.auth.spaces]);
  return {
    ready: isReady
  };
};
/**
 * @function useSpaceOpenRequestEffect
 * @description Dispatch 3Box open request.
 */


exports.useSpaceReadyEffect = useSpaceReadyEffect;

var useSpaceOpenRequestEffect = function useSpaceOpenRequestEffect(box, props) {
  var _useState13 = (0, _react.useState)(props.request),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      isRequested = _useState14[0],
      setIsRequested = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      isDispatched = _useState16[0],
      setIsDispatched = _useState16[1];

  var _useState17 = (0, _react.useState)(),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      isOpen = _useState18[0],
      setIsOpen = _useState18[1]; // Watch 3Box instance and update login status when initialized.


  (0, _react.useEffect)(function () {
    return setIsRequested(props.request);
  }, [props.request]);
  /**
   * @name SpaceInstanceStatus
   * @abstract Space
   * - trigger:box.auth.spaces[SPACE]
   * - requirement:box.address
   */

  (0, _react.useEffect)(function () {
    var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();

    if (selector) {
      setIsOpen(true);
    }
  }, [box.auth.spaces[props.space]]);
  (0, _react.useEffect)(function () {
    if (!box.auth.spaces[props.space] && isRequested && box.address) {
      box.openSpace(props.space);
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched: isDispatched,
    loading: isDispatched,
    ready: isOpen
  };
};
/**
 * @function useStorageSetStatusEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useSpaceOpenRequestEffect = useSpaceOpenRequestEffect;

var useStorageSetStatusEffect = function useStorageSetStatusEffect(box, props) {
  var _useState19 = (0, _react.useState)(false),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      isComplete = _useState20[0],
      setComplete = _useState20[1];

  (0, _react.useEffect)(function () {
    if (box.store.sets.length === 0) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [box.store.sets]);
  return {
    complete: isComplete
  };
};
/**
 * @function useStorageSelectorEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useStorageSetStatusEffect = useStorageSetStatusEffect;

var useStorageSelectorEffect = function useStorageSelectorEffect(box, props) {
  var _useState21 = (0, _react.useState)(false),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      selected = _useState22[0],
      setSelected = _useState22[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("@.".concat(props.address, ".spaces.").concat(props.space, ".").concat(props.selector)).value();
    if (select) setSelected(select);
  }, [(0, _dotPropImmutableChain["default"])(box).get("@.".concat(props.address, ".spaces.").concat(props.space, ".").concat(props.selector)).value()]);
  return selected;
};
/**
 * @function useStorageRemoveRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageSelectorEffect = useStorageSelectorEffect;

var useStorageRemoveRequestEffect = function useStorageRemoveRequestEffect(box, props) {
  var _useState23 = (0, _react.useState)(),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      isDispatched = _useState24[0],
      setIsDispatched = _useState24[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta && value) {
      box.remove({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched
  };
};
/**
 * @function useStorageInsertRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageRemoveRequestEffect = useStorageRemoveRequestEffect;

var useStorageInsertRequestEffect = function useStorageInsertRequestEffect(box, props) {
  var _useState25 = (0, _react.useState)(),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      isDispatched = _useState26[0],
      setIsDispatched = _useState26[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta && value) {
      box.insert({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched
  };
};
/**
 * @function useStorageDeleteRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageInsertRequestEffect = useStorageInsertRequestEffect;

var useStorageDeleteRequestEffect = function useStorageDeleteRequestEffect(box, props) {
  var _useState27 = (0, _react.useState)(0),
      _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
      message = _useState28[0],
      setMessage = _useState28[1];

  var _useState29 = (0, _react.useState)(),
      _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
      isDispatched = _useState30[0],
      setIsDispatched = _useState30[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setMessage(1);
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta) {
      box["delete"]({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched,
    message: message
  };
};
/* --------------------- */

/* Threads
/* --------------------- */

/**
 * @function useThreadPostStatusEffect
 * @description Watch thread post status effect.
 * @returns {Boolean} Instance Status
 */


exports.useStorageDeleteRequestEffect = useStorageDeleteRequestEffect;

var useThreadPostStatusEffect = function useThreadPostStatusEffect(box, props) {
  var _useState31 = (0, _react.useState)(false),
      _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
      isComplete = _useState32[0],
      setComplete = _useState32[1];

  (0, _react.useEffect)(function () {
    if (box.store.posts.length === 0) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [box.store.posts]);
  return {
    complete: isComplete
  };
};
/**
 * @function useThreadJoinEffect
 * @description Check if 3Box Thread is joined.
 */


exports.useThreadPostStatusEffect = useThreadPostStatusEffect;

var useThreadJoinEffect = function useThreadJoinEffect(box, props) {
  // Passed State
  var _useState33 = (0, _react.useState)(props.requestJoin || false),
      _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
      isJoinRequested = _useState34[0],
      setIsJoinRequested = _useState34[1]; // Internal State


  var _useState35 = (0, _react.useState)(false),
      _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
      isSpaceReady = _useState36[0],
      setIsSpaceReady = _useState36[1];

  var _useState37 = (0, _react.useState)(false),
      _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
      isDispatched = _useState38[0],
      setIsDispatched = _useState38[1];

  var _useState39 = (0, _react.useState)(false),
      _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
      isReady = _useState40[0],
      setIsReady = _useState40[1];

  var _useState41 = (0, _react.useState)(false),
      _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
      isSelected = _useState42[0],
      setIsSelected = _useState42[1];
  /* --- Passed Props State Effects --- */


  (0, _react.useEffect)(function () {
    if (!isJoinRequested) setIsJoinRequested(true);
  }, [props.requestJoin]);
  /* --- Internal State Effects --- */
  // Space Instance Ready

  (0, _react.useEffect)(function () {
    if (!isSpaceReady) {
      var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();
      if (selector) setIsSpaceReady(true);
    }
  }, [box.auth.spaces[props.space]]); // Dispatch Thread Join Request

  (0, _react.useEffect)(function () {
    try {
      if (isJoinRequested) {
        setIsDispatched(true);
        box.joinThread({
          threadAddress: props.threadAddress,
          threadName: props.threadName,
          space: props.space,
          options: props.options
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [isJoinRequested]); // // Watch Thread Chain

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName)).value();
    if (isJoinRequested && !isReady && select) setIsReady(true);
    setIsSelected(true);
  }, [box.auth.threads]);
  return {
    isSpaceReady: isSpaceReady,
    isDispatched: isDispatched,
    isReady: isReady
  };
};
/**
 * @function useThreadReadyEffect
 * @description Check if 3Box Thread is joined.
 */


exports.useThreadJoinEffect = useThreadJoinEffect;

var useThreadReadyEffect = function useThreadReadyEffect(box, props) {
  var _useState43 = (0, _react.useState)(false),
      _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
      isReady = _useState44[0],
      setIsReady = _useState44[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.auth.threads]);
  return {
    isReady: isReady,
    // deprecate
    ready: isReady
  };
};
/**
 * @function useThreadPostDeleteRequestEffect
 * @description Dispatch 3Box open request.
 */


exports.useThreadReadyEffect = useThreadReadyEffect;

var useThreadPostDeleteRequestEffect = function useThreadPostDeleteRequestEffect(box, props) {
  var _useState45 = (0, _react.useState)(props.request),
      _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
      isRequested = _useState46[0],
      setIsRequested = _useState46[1];

  var _useState47 = (0, _react.useState)(0),
      _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
      message = _useState48[0],
      setMessage = _useState48[1];

  var _useState49 = (0, _react.useState)(),
      _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
      isDispatched = _useState50[0],
      setIsDispatched = _useState50[1];

  var _useState51 = (0, _react.useState)(),
      _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
      isOpen = _useState52[0],
      setIsOpen = _useState52[1]; // Watch 3Box instance and update login status when initialized.


  (0, _react.useEffect)(function () {
    return setIsRequested(props.request);
  }, [props.request]);
  (0, _react.useEffect)(function () {
    var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.threads".concat(props.threadName)).value();

    if (selector) {
      setIsOpen(true);
    }
  }, [box.auth.threads[props.threadName]]);
  (0, _react.useEffect)(function () {
    if (isRequested && props.threadName && props.postId) {
      box.threadPostDelete({
        threadName: props.threadName,
        postId: props.postId
      });
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched: isDispatched,
    isOpen: isOpen,
    message: message
  };
};
/**
 * @function useThreadListenEffect
 * @description Listen for thread updates
 */


exports.useThreadPostDeleteRequestEffect = useThreadPostDeleteRequestEffect;

var useThreadListenEffect = function useThreadListenEffect(box, props) {
  // Passed State
  var _useState53 = (0, _react.useState)(props.listen),
      _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
      isRequested = _useState54[0],
      setIsRequested = _useState54[1]; // Internal State


  var _useState55 = (0, _react.useState)(false),
      _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
      isDispatched = _useState56[0],
      setIsDispatched = _useState56[1];

  var _useState57 = (0, _react.useState)(false),
      _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
      isActive = _useState58[0],
      setIsActive = _useState58[1];

  var _useState59 = (0, _react.useState)(props.threadName || props.threadAddress),
      _useState60 = (0, _slicedToArray2["default"])(_useState59, 1),
      threadId = _useState60[0];

  if (isActive) {
    console.log('thread is listening... shhh');

    try {// box.auth.threads[props.threadName].instance.onUpdate(()=>{console.log('call')})
    } catch (error) {
      console.log(error, 'thread update catch');
    }
  }
  /* --- Passed Props State Effects --- */


  (0, _react.useEffect)(function () {
    if (!isRequested) setIsRequested(true);
  }, [props.listen]);
  /* --- Internal State Effects --- */
  // Active

  (0, _react.useEffect)(function () {
    if (!isActive) {
      var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName)).value();
      if (selector) setIsActive(true);
    }
  }, [box.listening[threadId]]); // Dispatch

  (0, _react.useEffect)(function () {
    if (isRequested) {
      setIsDispatched(true);
      box.listenThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName
      });
    }
  }, [isRequested]);
  return {
    isActive: isActive,
    isDispatched: isDispatched
  };
};

exports.useThreadListenEffect = useThreadListenEffect;
var _default = {
  useLoggedInEffect: useLoggedInEffect,
  useOpenRequestEffect: useOpenRequestEffect,
  useSpaceOpenRequestEffect: useSpaceOpenRequestEffect,
  useSpaceReadyEffect: useSpaceReadyEffect,
  useStorageSelectorEffect: useStorageSelectorEffect,
  useStorageDeleteRequestEffect: useStorageDeleteRequestEffect,
  useStorageInsertRequestEffect: useStorageInsertRequestEffect,
  useStorageRemoveRequestEffect: useStorageRemoveRequestEffect,
  useThreadJoinEffect: useThreadJoinEffect,
  useThreadListenEffect: useThreadListenEffect,
  useThreadPostDeleteRequestEffect: useThreadPostDeleteRequestEffect,
  useThreadReadyEffect: useThreadReadyEffect
};
exports["default"] = _default;