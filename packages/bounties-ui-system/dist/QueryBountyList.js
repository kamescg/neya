"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryBountyList = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _regenerator = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _BountyItem = require("./BountyItem");

require("pure-react-carousel/dist/react-carousel.es.css");

var _module = require("module");

var _pureReactCarousel = require("pure-react-carousel");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var QueryBountyList = function QueryBountyList(props) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  (0, _react.useEffect)(function () {
    var url = 'https://api.bounties.network/bounty/?ordering=bounty_created&issuer=0x8d4d05d51771dbbd38276d8f931cfcad03724524&bountyStage=0';
    var urlBountyFull = 'https://api.bounties.network/bounty';
    var urlGitcoin = 'https://api.bounties.network/bounty/?ordering=bounty_created&platform=gitcoin';
    var urlBountiesNetwork = 'https://api.bounties.network/bounty/?ordering=bounty_created&platform=bounties-network';

    var runEffect =
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var data, json;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = props.platform;
                _context.next = _context.t0 === 'bounties-network' ? 3 : _context.t0 === 'gitcoin' ? 7 : 11;
                break;

              case 3:
                _context.next = 5;
                return fetch(urlBountyFull);

              case 5:
                data = _context.sent;
                return _context.abrupt("break", 15);

              case 7:
                _context.next = 9;
                return fetch(urlGitcoin);

              case 9:
                data = _context.sent;
                return _context.abrupt("break", 15);

              case 11:
                _context.next = 13;
                return fetch(urlBountyFull);

              case 13:
                data = _context.sent;
                return _context.abrupt("break", 15);

              case 15:
                _context.next = 17;
                return data.json();

              case 17:
                json = _context.sent;
                setItems(json.results);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function runEffect() {
        return _ref.apply(this, arguments);
      };
    }();

    runEffect();
  }, [props]);
  console.log(items, 'bounty items');
  return !items ? null : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Atom.Flex, {
    sx: _objectSpread({
      flexWrap: 'wrap'
    }, props.sx)
  }, Array.isArray(items) && _react["default"].createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    totalSlides: items.length,
    visibleSlides: 3
  }, _react["default"].createElement(_pureReactCarousel.Slider, {
    totalSlides: items.length,
    visibleSlides: 4
  }, items.map(function (bounty, index) {
    return _react["default"].createElement(_pureReactCarousel.Slide, {
      index: index
    }, _react["default"].createElement(_BountyItem.BountyItem, (0, _extends2["default"])({
      sx: styles.bounty
    }, bounty)));
  })), _react["default"].createElement(Atom.Flex, {
    center: true,
    column: true,
    sx: {
      my: 3
    }
  }, _react["default"].createElement(Atom.Flex, null, _react["default"].createElement(_pureReactCarousel.ButtonFirst, null, "First"), _react["default"].createElement(_pureReactCarousel.ButtonBack, null, "Back"), _react["default"].createElement(_pureReactCarousel.ButtonNext, null, "Next"), _react["default"].createElement(_pureReactCarousel.ButtonLast, null, "Last")), _react["default"].createElement(_pureReactCarousel.DotGroup, {
    dotNumbers: true
  })))));
};

exports.QueryBountyList = QueryBountyList;
var styles = {
  joblist: {
    mx: 4
  },
  content: {
    bg: 'paper',
    color: 'text',
    py: 4
  },
  sectionHeader: {
    textAlign: 'center'
  },
  bounty: {
    mx: 'auto',
    // mx: 4,
    width: ['90%']
  }
};