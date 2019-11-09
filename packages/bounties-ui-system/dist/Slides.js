"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slides = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/cerebro/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _pureReactCarousel = require("pure-react-carousel");

require("pure-react-carousel/dist/react-carousel.es.css");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var Slides = function Slides(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return _react["default"].createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    totalSlides: 6,
    visibleSlides: 3
  }, _react["default"].createElement(_pureReactCarousel.Slider, null, props.items && Array.isArray(props.items) && props.items.map(function (item, index) {
    return _react["default"].createElement(_pureReactCarousel.Slide, {
      index: index
    }, item);
  })), _react["default"].createElement(_designSystemAtoms.Flex, {
    center: true,
    column: true,
    sx: {
      my: 3
    }
  }, _react["default"].createElement(_designSystemAtoms.Flex, null, _react["default"].createElement(_pureReactCarousel.ButtonFirst, null, "First"), _react["default"].createElement(_pureReactCarousel.ButtonBack, null, "Back"), _react["default"].createElement(_pureReactCarousel.ButtonNext, null, "Next"), _react["default"].createElement(_pureReactCarousel.ButtonLast, null, "Last")), _react["default"].createElement(_pureReactCarousel.DotGroup, {
    dotNumbers: true
  })));
};

exports.Slides = Slides;