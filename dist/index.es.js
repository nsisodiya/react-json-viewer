import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Created by narendrasisodiya on 28/10/16.
 */

var ONE = 1;
var loopObject = function loopObject(obj, cb, sorted) {
  var keys = Object.keys(obj);
  if (sorted === true) {
    keys.sort();
  }
  return keys.map(function (key) {
    return cb(obj[key], key);
  });
};
var getSortedKeyString = function getSortedKeyString(obj) {
  return Object.keys(obj).sort().join(',');
};
var getType = function getType(val) {
  return Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, '$1');
};
var getFirstEle = function getFirstEle(obj) {
  return obj[Object.keys(obj)[0]];
};

var allValuesSameInArray = function allValuesSameInArray(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

var checkIfArrayIsAOB = function checkIfArrayIsAOB(obj) {
  if (getType(obj) === 'Array' && obj.length > ONE && getType(getFirstEle(obj)) === 'Object') {
    var test = loopObject(obj, function (row) {
      if (getType(row) === 'Object') {
        return getSortedKeyString(row);
      } else {
        return '';
      }
    });
    if (test.length > ONE && test[0].length > ONE) {
      return allValuesSameInArray(test);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
var checkIfObjectIsOOB = function checkIfObjectIsOOB(obj) {
  if (getType(obj) === 'Object' && Object.keys(obj).length > ONE && getType(getFirstEle(obj)) === 'Object') {
    var test = loopObject(obj, function (row) {
      if (getType(row) === 'Object') {
        return getSortedKeyString(row);
      } else {
        return '';
      }
    });
    if (test.length > ONE && test[0].length > ONE) {
      return allValuesSameInArray(test);
    } else {
      return false;
    }
  } else {
    return false;
  }
};

var util = {
  loopObject: loopObject,
  getSortedKeyString: getSortedKeyString,
  getType: getType,
  getFirstEle: getFirstEle,
  allValuesSameInArray: allValuesSameInArray,
  checkIfArrayIsAOB: checkIfArrayIsAOB,
  checkIfObjectIsOOB: checkIfObjectIsOOB
};
var util_1 = util.loopObject;
var util_3 = util.getType;
var util_4 = util.getFirstEle;
var util_6 = util.checkIfArrayIsAOB;
var util_7 = util.checkIfObjectIsOOB;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ValueViewer = function (_Component) {
  inherits(ValueViewer, _Component);

  function ValueViewer(props, context) {
    classCallCheck(this, ValueViewer);
    return possibleConstructorReturn(this, (ValueViewer.__proto__ || Object.getPrototypeOf(ValueViewer)).call(this, props, context));
  }

  createClass(ValueViewer, [{
    key: 'r',
    value: function r() {
      switch (util_3(this.props.value)) {
        case 'String':
          return React.createElement(
            'span',
            { style: { color: 'rgb(255, 65, 60)' } },
            '"' + this.props.value + '"'
          );
        case 'Boolean':
          return React.createElement(
            'span',
            { style: { color: 'rgb(31, 48, 255)' } },
            '' + this.props.value
          );
        case 'Number':
          return React.createElement(
            'span',
            { style: { color: 'rgb(31, 49, 255)' } },
            '' + this.props.value
          );
        case 'Undefined':
          return React.createElement(
            'i',
            { style: { color: '#777777' } },
            'undefined'
          );
        case 'Null':
          return React.createElement(
            'i',
            { style: { color: '#777777' } },
            'null'
          );
        case 'Date':
          return React.createElement(
            'i',
            { style: { color: '#007bc7' } },
            '' + JSON.stringify(this.props.value)
          );
        default:
          return React.createElement(
            'span',
            { style: { color: 'rgb(31, 49, 255)' } },
            '' + this.props.value
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        null,
        this.r()
      );
    }
  }]);
  return ValueViewer;
}(Component);

ValueViewer.propTypes = {
  value: PropTypes.any
};
ValueViewer.defaultProps = {};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n.styles_test__32Qsm {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n";
styleInject(css);

var ZERO = 0;

var JSONViewer = function (_Component) {
  inherits(JSONViewer, _Component);

  function JSONViewer() {
    classCallCheck(this, JSONViewer);
    return possibleConstructorReturn(this, (JSONViewer.__proto__ || Object.getPrototypeOf(JSONViewer)).apply(this, arguments));
  }

  createClass(JSONViewer, [{
    key: 'renderHeaderByKeys',
    value: function renderHeaderByKeys(keys, addExtra) {
      var _this2 = this;

      return React.createElement(
        'thead',
        this.props.theadProps,
        React.createElement(
          'tr',
          this.props.trProps,
          function () {
            if (addExtra === 'addExtra') {
              return React.createElement(
                'th',
                _extends({}, _this2.props.thProps, { style: _this2.constructor.styles.td }),
                React.createElement('span', { style: { color: 'rgb(111, 11, 11)' } })
              );
            }
          }(),
          keys.map(function (key, i) {
            return React.createElement(
              'th',
              _extends({}, _this2.props.tdProps, {
                key: i,
                style: _this2.constructor.styles.td
              }),
              React.createElement(
                'span',
                { style: { color: 'rgb(111, 11, 11)' } },
                key
              )
            );
          })
        )
      );
    }
  }, {
    key: 'objToTable',
    value: function objToTable(obj) {
      var _this3 = this;

      if (JSON.stringify(obj) === '{}') {
        return '{ }';
      } else {
        return React.createElement(
          'table',
          this.props.tableProps,
          this.renderHeaderByKeys(Object.keys(obj)),
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              this.props.trProps,
              util_1(obj, function (v, key) {
                return _this3.renderTd(v, key);
              })
            )
          )
        );
      }
    }
  }, {
    key: 'arrayToTable',
    value: function arrayToTable(obj) {
      var _this4 = this;

      if (util_3(obj) === 'Array' && obj.length === ZERO) {
        return '[ ]';
      } else {
        return React.createElement(
          'table',
          this.props.tableProps,
          React.createElement(
            'tbody',
            null,
            util_1(obj, function (v, key) {
              return React.createElement(
                'tr',
                _this4.props.trProps,
                React.createElement(
                  'td',
                  _extends({}, _this4.props.tdProps, {
                    style: _this4.constructor.styles.td
                  }),
                  '' + key
                ),
                _this4.renderTd(v, key)
              );
            })
          )
        );
      }
    }
  }, {
    key: 'oobToTable',
    value: function oobToTable(aob) {
      var _this5 = this;

      return React.createElement(
        'table',
        this.props.tableProps,
        this.renderHeaderByKeys(Object.keys(util_4(aob)), 'addExtra'),
        React.createElement(
          'tbody',
          null,
          util_1(aob, function (row, j) {
            return React.createElement(
              'tr',
              _extends({}, _this5.props.trProps, { key: j }),
              React.createElement(
                'td',
                _extends({}, _this5.props.tdProps, { style: _this5.constructor.styles.td }),
                React.createElement(ValueViewer, { value: j })
              ),
              util_1(util_4(aob), function (val, key) {
                return _this5.renderTd(row[key], key);
              })
            );
          })
        )
      );
    }
  }, {
    key: 'renderTd',
    value: function renderTd(guess, index) {
      return React.createElement(
        'td',
        _extends({}, this.props.tdProps, {
          key: index,
          style: this.constructor.styles.td
        }),
        this.decideAndRender(guess)
      );
    }
  }, {
    key: 'decideAndRender',
    value: function decideAndRender(guess) {
      if (util_3(guess) === 'Array') {
        if (util_6(guess)) {
          return this.aobToTable(guess);
        } else {
          return this.arrayToTable(guess);
        }
      }
      if (util_3(guess) === 'Object') {
        if (util_7(guess)) {
          return this.oobToTable(guess);
        } else {
          return this.objToTable(guess);
        }
      } else {
        return React.createElement(ValueViewer, { value: guess });
      }
    }
  }, {
    key: 'aobToTable',
    value: function aobToTable(aob) {
      var _this6 = this;

      return React.createElement(
        'table',
        this.props.tableProps,
        this.renderHeaderByKeys(Object.keys(util_4(aob))),
        React.createElement(
          'tbody',
          this.props.tbodyProps,
          util_1(aob, function (row, j) {
            return React.createElement(
              'tr',
              _extends({}, _this6.props.trProps, { key: j }),
              util_1(util_4(aob), function (val, key) {
                return _this6.renderTd(row[key], key);
              })
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.decideAndRender(this.props.json)
      );
    }
  }]);
  return JSONViewer;
}(Component);

JSONViewer.styles = {
  td: {
    border: '1px solid #cccccc',
    textAlign: 'left',
    margin: 0,
    padding: '6px 13px'
  },
  th: {
    border: '1px solid #cccccc',
    textAlign: 'left',
    margin: 0,
    padding: '6px 13px',
    fontWeight: 'bold'
  }
};
JSONViewer.propTypes = {
  json: PropTypes.any.isRequired,
  tableProps: PropTypes.object,
  trProps: PropTypes.object,
  tdProps: PropTypes.object,
  thProps: PropTypes.object,
  tbodyProps: PropTypes.object,
  theadProps: PropTypes.object
};
JSONViewer.defaultProps = {};

export default JSONViewer;
//# sourceMappingURL=index.es.js.map
