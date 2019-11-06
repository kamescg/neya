"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slides = void 0;

var _react = _interopRequireDefault(require("react"));

var _pureReactCarousel = require("pure-react-carousel");

require("pure-react-carousel/dist/react-carousel.es.css");

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slides = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    totalSlides: 6,
    visibleSlides: 3
  }, _react.default.createElement(_pureReactCarousel.Slider, null, props.items && Array.isArray(props.items) && props.items.map((item, index) => _react.default.createElement(_pureReactCarousel.Slide, {
    index: index
  }, item))), _react.default.createElement(_designSystemAtoms.Flex, {
    center: true,
    column: true,
    sx: {
      my: 3
    }
  }, _react.default.createElement(_designSystemAtoms.Flex, null, _react.default.createElement(_pureReactCarousel.ButtonFirst, null, "First"), _react.default.createElement(_pureReactCarousel.ButtonBack, null, "Back"), _react.default.createElement(_pureReactCarousel.ButtonNext, null, "Next"), _react.default.createElement(_pureReactCarousel.ButtonLast, null, "Last")), _react.default.createElement(_pureReactCarousel.DotGroup, {
    dotNumbers: true
  })));
};

exports.Slides = Slides;