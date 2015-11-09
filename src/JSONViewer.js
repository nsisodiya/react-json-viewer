import React, {Component} from "react";
import ValueViewer from './ValueViewer';

class JSONViewer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	renderHeaderByKeys(keys) {
		return (
				<thead>
				<tr>{
					keys.map((key, i) => {
						return (
								<th key={i} style={this.constructor.styles.td}>
									<span style={{color:"rgb(111, 11, 11)"}}>{key}</span>
								</th>
						);
					})
				}</tr>
				</thead>
		);
	}

	objToTable(obj) {
		if (Array.isArray(obj) === true && obj.length === 0) {
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
				return this.objToTable(guess);
			}
		} else {
			if (typeof guess === "object" && guess !== null) {
				return this.objToTable(guess);
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
						aob.map((row, j)=> {
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

	checkIfArrayIsAOB(arr) {
		if (Array.isArray(arr) === true && arr.length !== 0 && typeof arr[0] === "object") {
			var keystr = JSON.stringify(Object.keys(arr[0]).sort());
			var unmatched = arr.filter((v)=> {
				return keystr !== JSON.stringify(Object.keys(v).sort());
			});
			return unmatched.length === 0;
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
}
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
//export default JSONViewer;
module.exports = JSONViewer;