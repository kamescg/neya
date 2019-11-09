"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatElements = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/NEYA/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactChatElements = require("react-chat-elements");

var _timeago = require("timeago.js");

var ChatElements =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ChatElements, _Component);

  function ChatElements(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ChatElements);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ChatElements).call(this, props));
    _this.state = {
      show: true,
      messageList: []
    };
    return _this;
  }

  (0, _createClass2["default"])(ChatElements, [{
    key: "componentWillMount",
    value: function componentWillMount() {// setInterval(this.addMessage.bind(this), 3000);
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }
  }, {
    key: "token",
    value: function token() {
      return parseInt(Math.random() * 10 % 6);
    }
  }, {
    key: "photo",
    value: function photo(size) {
      return null;
    }
  }, {
    key: "random",
    value: function random(type) {
      switch (type) {
        case 'message':
          var type = this.token();
          var status = 'waiting';

          switch (type) {
            case 0:
              type = 'photo';
              status = 'sent';
              break;

            case 1:
              type = 'file';
              status = 'sent';
              break;

            case 2:
              type = 'system';
              status = 'received';
              break;

            case 3:
              type = 'location';
              break;

            case 4:
              type = 'spotify';
              break;

            default:
              type = 'text';
              status = 'read';
              break;
          }

          return {
            position: this.token() >= 1 ? 'right' : 'left',
            forwarded: true,
            type: type,
            theme: 'white',
            view: 'list',
            title: 'words',
            titleColor: this.getRandomColor(),
            text: type === 'spotify' ? 'spotify:track:7wGoVu4Dady5GV0Sv4UIsx' : 'words',
            data: {
              uri: "data:image/png;base64,".concat(this.photo(150)),
              status: {
                click: true,
                loading: 0.5
              },
              size: '100MB',
              width: 300,
              height: 300,
              latitude: '37.773972',
              longitude: '-122.431297',
              staticURL: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY'
            },
            onLoad: function onLoad() {
              console.log('Photo loaded');
            },
            status: status,
            date: +new Date(),
            avatar: "data:image/png;base64,".concat(this.photo())
          };

        case 'chat':
          return {
            id: String(Math.random()),
            avatar: "data:image/png;base64,".concat(this.photo()),
            avatarFlexible: true,
            statusColor: 'lightgreen',
            statusColorType: parseInt(Math.random() * 100 % 2) === 1 ? 'encircle' : undefined,
            alt: 'words',
            title: 'words',
            date: new Date(),
            subtitle: 'words',
            unread: parseInt(Math.random() * 10 % 3),
            dropdownMenu: _react["default"].createElement(_reactChatElements.Dropdown, {
              animationPosition: "norteast",
              title: "Dropdown Title",
              buttonProps: {
                type: 'transparent',
                color: '#cecece',
                icon: {
                  component: _react["default"].createElement("div", null, "button"),
                  size: 24
                }
              },
              items: [{
                icon: {
                  component: _react["default"].createElement("div", null, "button"),
                  "float": 'left',
                  color: 'red',
                  size: 22
                },
                text: 'Menu Item'
              }, {
                icon: {
                  component: _react["default"].createElement("div", null, "button"),
                  "float": 'left',
                  color: 'purple',
                  size: 22
                },
                text: 'Menu Item'
              }, {
                icon: {
                  component: _react["default"].createElement("div", null, "button"),
                  "float": 'left',
                  color: 'yellow',
                  size: 22
                },
                text: 'Menu Item'
              }]
            })
          };
      }
    }
  }, {
    key: "addMessage",
    value: function addMessage() {
      var list = this.state.messageList;
      list.push(this.random('message'));
      this.setState({
        messageList: list
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var arr = [];

      for (var i = 0; i < 5; i++) {
        arr.push(i);
      }

      var chatSource = arr.map(function (x) {
        return _this2.random('chat');
      });
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "chat-list"
      }, _react["default"].createElement(_reactChatElements.SideBar, {
        top: _react["default"].createElement(_reactChatElements.Popup // show={this.state.show}
        , {
          header: "Lorem ipsum dolor sit amet.",
          headerButtons: [{
            type: 'transparent',
            color: 'black',
            onClick: function onClick() {
              _this2.setState({
                show: false
              });
            },
            icon: {
              component: _react["default"].createElement("div", null, "button"),
              size: 18
            }
          }],
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!",
          footerButtons: [{
            color: 'white',
            backgroundColor: '#ff5e3e',
            text: 'Vazgeç'
          }, {
            color: 'white',
            backgroundColor: 'lightgreen',
            text: 'Tamam'
          }]
        }),
        center: _react["default"].createElement(_reactChatElements.ChatList, {
          dataSource: chatSource
        }),
        bottom: _react["default"].createElement("span", null, _react["default"].createElement(_reactChatElements.Button, {
          type: "transparent",
          color: "black",
          icon: {
            component: _react["default"].createElement("div", null, "button"),
            size: 18
          }
        }), _react["default"].createElement(_reactChatElements.Button, {
          type: "transparent",
          color: "black",
          icon: {
            component: _react["default"].createElement("div", null, "button"),
            size: 18
          }
        }), _react["default"].createElement(_reactChatElements.Button, {
          text: "Count"
        }))
      })), _react["default"].createElement("div", {
        className: "right-panel"
      }, _react["default"].createElement(_reactChatElements.MessageList, {
        className: "message-list",
        lockable: true,
        downButtonBadge: 10,
        dataSource: this.state.messageList
      }), _react["default"].createElement(_reactChatElements.Input, {
        placeholder: "Mesaj\u0131n\u0131z\u0131 buraya yaz\u0131n\u0131z.",
        defaultValue: "",
        ref: "input",
        multiline: true // buttonsFloat='left'
        ,
        onKeyPress: function onKeyPress(e) {
          if (e.shiftKey && e.charCode === 13) {
            return true;
          }

          if (e.charCode === 13) {
            _this2.refs.input.clear();

            _this2.addMessage();

            e.preventDefault();
            return false;
          }
        },
        rightButtons: _react["default"].createElement(_reactChatElements.Button, {
          text: "G\xF6nder",
          onClick: this.addMessage.bind(this)
        })
      })));
    }
  }]);
  return ChatElements;
}(_react.Component);

exports.ChatElements = ChatElements;