"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryBountyList = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _BountyItem = _interopRequireDefault(require("./BountyItem"));

var QueryBountyList = function QueryBountyList(props) {
  var _useState = useState(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  return React.createElement(React.Fragment, null, React.createElement(Atom.Heading, {
    xxl: true
  }, "Bounty List"), React.createElement(Atom.Flex, null, Array.isArray(items) && items.map(function (bounty) {
    return React.createElement(_BountyItem["default"], bounty);
  })));
};

exports.QueryBountyList = QueryBountyList;