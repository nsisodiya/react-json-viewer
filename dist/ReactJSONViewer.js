(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactJSONViewer"] = factory(require("react"));
	else
		root["ReactJSONViewer"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ValueViewer = __webpack_require__(3);

	var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ZERO = 0;

	var JSONViewer = function (_Component) {
	  _inherits(JSONViewer, _Component);

	  function JSONViewer(props, context) {
	    _classCallCheck(this, JSONViewer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(JSONViewer).call(this, props, context));
	  }

	  _createClass(JSONViewer, [{
	    key: "renderHeaderByKeys",
	    value: function renderHeaderByKeys(keys, addExtra) {
	      var _this2 = this;

	      return _react2.default.createElement(
	        "thead",
	        null,
	        _react2.default.createElement(
	          "tr",
	          null,
	          function () {
	            if (addExtra === "addExtra") {
	              return _react2.default.createElement(
	                "th",
	                { style: _this2.constructor.styles.td },
	                _react2.default.createElement("span", { style: { color: "rgb(111, 11, 11)" } })
	              );
	            }
	          }(),
	          keys.map(function (key, i) {
	            return _react2.default.createElement(
	              "th",
	              { key: i, style: _this2.constructor.styles.td },
	              _react2.default.createElement(
	                "span",
	                { style: { color: "rgb(111, 11, 11)" } },
	                key
	              )
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: "objToTable",
	    value: function objToTable(obj) {
	      var _this3 = this;

	      if (JSON.stringify(obj) === "{}") {
	        return "{ }";
	      } else {
	        return _react2.default.createElement(
	          "table",
	          null,
	          this.renderHeaderByKeys(Object.keys(obj)),
	          _react2.default.createElement(
	            "tbody",
	            null,
	            _react2.default.createElement(
	              "tr",
	              null,
	              (0, _util.loopObject)(obj, function (v, key) {
	                return _this3.renderTd(v, key);
	              })
	            )
	          )
	        );
	      }
	    }
	  }, {
	    key: "arrayToTable",
	    value: function arrayToTable(obj) {
	      var _this4 = this;

	      if ((0, _util.getType)(obj) === "Array" && obj.length === ZERO) {
	        return "[ ]";
	      } else {
	        return _react2.default.createElement(
	          "table",
	          null,
	          _react2.default.createElement(
	            "tbody",
	            null,
	            (0, _util.loopObject)(obj, function (v, key) {
	              return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                  "td",
	                  { style: _this4.constructor.styles.td },
	                  "" + key
	                ),
	                _this4.renderTd(v, key)
	              );
	            })
	          )
	        );
	      }
	    }
	  }, {
	    key: "oobToTable",
	    value: function oobToTable(aob) {
	      var _this5 = this;

	      return _react2.default.createElement(
	        "table",
	        null,
	        this.renderHeaderByKeys(Object.keys((0, _util.getFirstEle)(aob)), "addExtra"),
	        _react2.default.createElement(
	          "tbody",
	          null,
	          (0, _util.loopObject)(aob, function (row, j) {
	            return _react2.default.createElement(
	              "tr",
	              { key: j },
	              _react2.default.createElement(
	                "td",
	                { style: _this5.constructor.styles.td },
	                _react2.default.createElement(_ValueViewer2.default, { value: j })
	              ),
	              (0, _util.loopObject)((0, _util.getFirstEle)(aob), function (val, key) {
	                return _this5.renderTd(row[key], key);
	              })
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: "renderTd",
	    value: function renderTd(guess, index) {
	      return _react2.default.createElement(
	        "td",
	        { key: index, style: this.constructor.styles.td },
	        this.decideAndRender(guess)
	      );
	    }
	  }, {
	    key: "decideAndRender",
	    value: function decideAndRender(guess) {
	      if ((0, _util.getType)(guess) === "Array") {
	        if ((0, _util.checkIfArrayIsAOB)(guess)) {
	          return this.aobToTable(guess);
	        } else {
	          return this.arrayToTable(guess);
	        }
	      }
	      if ((0, _util.getType)(guess) === "Object") {
	        if ((0, _util.checkIfObjectIsOOB)(guess)) {
	          return this.oobToTable(guess);
	        } else {
	          return this.objToTable(guess);
	        }
	      } else {
	        return _react2.default.createElement(_ValueViewer2.default, { value: guess });
	      }
	    }
	  }, {
	    key: "aobToTable",
	    value: function aobToTable(aob) {
	      var _this6 = this;

	      return _react2.default.createElement(
	        "table",
	        null,
	        this.renderHeaderByKeys(Object.keys((0, _util.getFirstEle)(aob))),
	        _react2.default.createElement(
	          "tbody",
	          null,
	          (0, _util.loopObject)(aob, function (row, j) {
	            return _react2.default.createElement(
	              "tr",
	              { key: j },
	              (0, _util.loopObject)((0, _util.getFirstEle)(aob), function (val, key) {
	                return _this6.renderTd(row[key], key);
	              })
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        this.decideAndRender(this.props.json)
	      );
	    }
	  }]);

	  return JSONViewer;
	}(_react.Component);
	JSONViewer.propTypes = {
	  json: _react2.default.PropTypes.any.isRequired
	};

	JSONViewer.defaultProps = {};

	JSONViewer.styles = {
	  td: {
	    border: "1px solid #cccccc",
	    textAlign: "left",
	    margin: 0,
	    padding: "6px 13px"
	  },
	  th: {
	    border: "1px solid #cccccc",
	    textAlign: "left",
	    margin: 0,
	    padding: "6px 13px",
	    fontWeight: "bold"
	  }
	};
	module.exports = JSONViewer;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ValueViewer = function (_Component) {
	  _inherits(ValueViewer, _Component);

	  function ValueViewer(props, context) {
	    _classCallCheck(this, ValueViewer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ValueViewer).call(this, props, context));
	  }

	  _createClass(ValueViewer, [{
	    key: "r",
	    value: function r() {
	      switch ((0, _util.getType)(this.props.value)) {
	        case "String":
	          return _react2.default.createElement(
	            "span",
	            { style: { color: "rgb(255, 65, 60)" } },
	            "\"" + this.props.value + "\""
	          );
	        case "Boolean":
	          return _react2.default.createElement(
	            "span",
	            { style: { color: "rgb(31, 48, 255)" } },
	            "" + this.props.value
	          );
	        case "Number":
	          return _react2.default.createElement(
	            "span",
	            { style: { color: "rgb(31, 49, 255)" } },
	            "" + this.props.value
	          );
	        case "Undefined":
	          return _react2.default.createElement(
	            "i",
	            { style: { color: "#777777" } },
	            "undefined"
	          );
	        case "Null":
	          return _react2.default.createElement(
	            "i",
	            { style: { color: "#777777" } },
	            "null"
	          );
	        case "Date":
	          return _react2.default.createElement(
	            "i",
	            { style: { color: "#007bc7;" } },
	            "" + JSON.stringify(this.props.value)
	          );
	        default:
	          return _react2.default.createElement(
	            "span",
	            { style: { color: "rgb(31, 49, 255)" } },
	            "" + this.props.value
	          );
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "span",
	        null,
	        this.r()
	      );
	    }
	  }]);

	  return ValueViewer;
	}(_react.Component);

	ValueViewer.propTypes = {};
	ValueViewer.defaultProps = {};
	exports.default = ValueViewer;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

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
	  return Object.keys(obj).sort().join(",");
	};
	var getType = function getType(val) {
	  return Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, "$1");
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
	  if (getType(obj) === "Array" && obj.length > ONE && getType(getFirstEle(obj)) === "Object") {
	    var test = loopObject(obj, function (row) {
	      if (getType(row) === "Object") {
	        return getSortedKeyString(row);
	      } else {
	        return "";
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
	  if (getType(obj) === "Object" && Object.keys(obj).length > ONE && getType(getFirstEle(obj)) === "Object") {
	    var test = loopObject(obj, function (row) {
	      if (getType(row) === "Object") {
	        return getSortedKeyString(row);
	      } else {
	        return "";
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

	module.exports = {
	  loopObject: loopObject,
	  getSortedKeyString: getSortedKeyString,
	  getType: getType,
	  getFirstEle: getFirstEle,
	  allValuesSameInArray: allValuesSameInArray,
	  checkIfArrayIsAOB: checkIfArrayIsAOB,
	  checkIfObjectIsOOB: checkIfObjectIsOOB
	};

/***/ }
/******/ ])
});
;