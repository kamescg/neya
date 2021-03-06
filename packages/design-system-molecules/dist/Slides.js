"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slides = void 0;

var _react = _interopRequireWildcard(require("react"));

var _componentSize = _interopRequireDefault(require("@rehooks/component-size"));

var _uiCompose = require("@horizin/ui-compose");

var _pureReactCarousel = require("pure-react-carousel");

require("pure-react-carousel/dist/react-carousel.es.css");

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slides = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  var [width, setWidth] = (0, _react.useState)(props.naturalSlideHeight);
  var [height, setHeight] = (0, _react.useState)(props.naturalSlideHeight);
  return _react.default.createElement(_pureReactCarousel.CarouselProvider, {
    naturalSlideWidth: width,
    naturalSlideHeight: height,
    totalSlides: props.totalSlides,
    visibleSlides: props.visibleSlides
  }, _react.default.createElement(_pureReactCarousel.Slider, null, props.items && Array.isArray(props.items) && props.items.map((item, index) => _react.default.createElement(_pureReactCarousel.Slide, {
    index: index
  }, _react.default.createElement(ComponentResize, {
    item: item,
    setHeight: setHeight,
    setWidth: setWidth
  })))), _react.default.createElement(_designSystemAtoms.Flex, {
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

var ComponentResize = (_ref2) => {
  var {
    item,
    setHeight,
    setWidth
  } = _ref2;
  var ref = (0, _react.useRef)(null);
  var size = (0, _componentSize.default)(ref);
  (0, _react.useEffect)(() => {
    if (size.height > 100) {
      setHeight(size.height);
      setWidth(size.width);
    }

    console.log(size, 'sizesize');
  }, [size]);
  return _react.default.createElement(_designSystemAtoms.Flex, null, (0, _uiCompose.Component)(item, {
    ref: ref
  }));
};