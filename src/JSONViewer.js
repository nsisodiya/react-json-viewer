"use strict";

import React, {Component} from "react";
import ValueViewer from "./ValueViewer";
import {
  loopObject,
  getType,
  getFirstEle,
  checkIfArrayIsAOB,
  checkIfObjectIsOOB
} from "./util";
var ZERO = 0;

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
    if (JSON.stringify(obj) === "{}") {
      return "{ }";
    } else {
      return (
        <table>
          {this.renderHeaderByKeys(Object.keys(obj))}
          <tbody>
          <tr>{
            loopObject(obj, (v, key) => {
              return this.renderTd(v, key);
            })
          }</tr>
          </tbody>
        </table>
      );
    }
  }

  arrayToTable(obj) {
    if (getType(obj) === "Array" && obj.length === ZERO) {
      return "[ ]";
    } else {
      return (
        <table>
          <tbody>
          {
            loopObject(obj, (v, key) => {
              return <tr>
                <td style={this.constructor.styles.td}>{`${key}`}</td>
                {this.renderTd(v, key)}
              </tr>;
            })
          }
          </tbody>
        </table>
      );
    }
  }

  oobToTable(aob) {
    return (
      <table>
        {this.renderHeaderByKeys(Object.keys(getFirstEle(aob)), "addExtra")}
        <tbody>
        {
          loopObject(aob, (row, j)=> {
            return (
              <tr key={j}>
                <td style={this.constructor.styles.td}><ValueViewer value={j}/></td>
                {
                  loopObject(getFirstEle(aob), (val, key)=> {
                    return this.renderTd(row[key], key);
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

  renderTd(guess, index) {
    return (
      <td key={index} style={this.constructor.styles.td}>{
        this.decideAndRender(guess)
      }</td>
    );
  }

  decideAndRender(guess) {
    if (getType(guess) === "Array") {
      if (checkIfArrayIsAOB(guess)) {
        return this.aobToTable(guess);
      } else {
        return this.arrayToTable(guess);
      }
    }
    if (getType(guess) === "Object") {
      if (checkIfObjectIsOOB(guess)) {
        return this.oobToTable(guess);
      } else {
        return this.objToTable(guess);
      }
    } else {
      return <ValueViewer value={guess}></ValueViewer>;
    }
  }

  aobToTable(aob) {
    return (
      <table>
        {this.renderHeaderByKeys(Object.keys(getFirstEle(aob)))}
        <tbody>
        {
          loopObject(aob, (row, j)=> {
            return (
              <tr key={j}>{
                loopObject(getFirstEle(aob), (val, key)=> {
                  return this.renderTd(row[key], key);
                })
              }</tr>
            );
          })
        }
        </tbody>
      </table>
    );
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
