/**
 * Created by narendrasisodiya on 28/10/16.
 */

var ONE = 1;
var loopObject = function loopObject(obj, cb, sorted) {
  var keys = Object.keys(obj);
  if (sorted === true) {
    keys.sort();
  }
  return keys.map(function(key) {
    return cb(obj[key], key);
  });
};
var getSortedKeyString = function getSortedKeyString(obj) {
  return Object.keys(obj)
    .sort()
    .join(',');
};
var getType = function(val) {
  return Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, '$1');
};
var getFirstEle = function getFirstEle(obj) {
  return obj[Object.keys(obj)[0]];
};

var allValuesSameInArray = function(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

var checkIfArrayIsAOB = function checkIfArrayIsAOB(obj) {
  if (getType(obj) === 'Array' && obj.length > ONE && getType(getFirstEle(obj)) === 'Object') {
    var test = loopObject(obj, function(row) {
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
    var test = loopObject(obj, function(row) {
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

module.exports = {
  loopObject,
  getSortedKeyString,
  getType,
  getFirstEle,
  allValuesSameInArray,
  checkIfArrayIsAOB,
  checkIfObjectIsOOB,
};
