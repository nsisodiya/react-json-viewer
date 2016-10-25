"use strict";

import React, {Component} from "react";
import ValueViewer from "./ValueViewer";

var ZERO = 0;

var allValuesSameInArray = function (arr) {
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

var JSONViewer = class JSONViewer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderHeaderByKeys(keys, addExtra) {
    return (
      <thead>
      <tr>
        {
          (()=> {
            if (addExtra === "addExtra") {
              return <th style={this.constructor.styles.td}>
                <span style={{color: "rgb(111, 11, 11)"}}></span>
              </th>;
            }
          })()
        }
        {
          keys.map((key, i) => {
            return (
              <th key={i} style={this.constructor.styles.td}>
                <span style={{color: "rgb(111, 11, 11)"}}>{key}</span>
              </th>
            );
          })
        }
      </tr>
      </thead>
    );
  }

  objToTable(obj) {
    if (Array.isArray(obj) === true && obj.length === ZERO) {
      return "[ ]";
    } else if (JSON.stringify(obj) === "{}") {
      return "{ }";
    } else {
      return (
        <table>
          {this.renderHeaderByKeys(Object.keys(obj))}
          <tbody>
          <tr>{
            Object.keys(obj).map((key, i) => {
              return this.renderTd(obj[key], i);
            })
          }</tr>
          </tbody>
        </table>
      );
    }
  }

  arrayToTable(obj) {
    if (Array.isArray(obj) === true && obj.length === ZERO) {
      return "[ ]";
    } else {
      return (
        <table>
          <tbody>
          {
            Object.keys(obj).map((key, i) => {
              return <tr>
                <td style={this.constructor.styles.td}>{`${i}`}</td>
                {this.renderTd(obj[key], i)}
              </tr>;
            })
          }
          </tbody>
        </table>
      );
    }
  }

  renderTd(guess, index) {
    return (
      <td key={index} style={this.constructor.styles.td}>{
        this.decideAndRender(guess)
      }</td>
    );
  }

  decideAndRender(guess) {
    if (Array.isArray(guess) === true) {
      if (this.checkIfArrayIsAOB(guess)) {
        return this.aobToTable(guess);
      } else {
        return this.arrayToTable(guess);
      }
    } else {
      if (typeof guess === "object" && guess !== null) {
        if (this.checkIfObjectIsOOB(guess)) {
          return this.oobToTable(guess);
        } else {
          return this.objToTable(guess);
        }
      } else {
        return <ValueViewer value={guess}></ValueViewer>;
      }
    }
  }

  aobToTable(aob) {
    var keys = Object.keys(aob[0]);
    return (
      <table>
        {this.renderHeaderByKeys(keys)}
        <tbody>
        {
          Object.keys(aob).map((j)=> {
            var row = aob[j];
            return (
              <tr key={j}>{
                keys.map((v, i)=> {
                  return this.renderTd(row[v], i);
                })
              }</tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }

  oobToTable(aob) {
    var keys = Object.keys(aob[Object.keys(aob)[0]]);
    return (
      <table>
        {this.renderHeaderByKeys(keys, "addExtra")}
        <tbody>
        {
          Object.keys(aob).map((j)=> {
            var row = aob[j];
            return (
              <tr key={j}>
                <td style={this.constructor.styles.td}><ValueViewer value={j}/></td>
                {
                  keys.map((v, i)=> {
                    return this.renderTd(row[v], i);
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }

  checkIfArrayIsAOB(arr) {
    if (Array.isArray(arr) === true && arr.length !== ZERO && typeof arr[0] === "object") {
      var keystr = JSON.stringify(Object.keys(arr[0]).sort());
      var unmatched = arr.filter((v)=> {
        return keystr !== JSON.stringify(Object.keys(v).sort());
      });
      return unmatched.length === ZERO;
    } else {
      return false;
    }
  }

  checkIfObjectIsOOB(obj) {
    var One = 1;
    var test = Object.keys(obj).map(function (i) {
      if (obj[i] !== null && typeof obj[i] === "object") {
        return Object.keys(obj[i]).sort().join(",");
      } else {
        return "";
      }
    }).filter(function (v, i, A) {
      return A.length > One;
    });
    if (test.length > One) {
      return allValuesSameInArray(test);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>{
        this.decideAndRender(this.props.json)
      }
      </div>
    );
  }
};
JSONViewer.propTypes = {
  json: React.PropTypes.any.isRequired
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
