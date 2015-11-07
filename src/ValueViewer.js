import React, {Component} from "react";

class ValueViewer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	r() {
		switch (typeof this.props.value) {
			case "string":
				return <span style={{color:"rgb(255, 65, 60)"}}>{"\"" + this.props.value + "\"" }</span>;
			case "boolean":
				return <span style={{color:"rgb(31, 48, 255)"}}>{this.props.value + "" }</span>;
			case "number":
				return <span style={{color:"rgb(31, 49, 255)"}}>{this.props.value + "" }</span>;
			case "undefined":
				return <i style={{color:"#777777"}}>{this.props.value + "" }</i>;
			case "object":
				return <i style={{color:"#777777"}}>{this.props.value + "" }</i>;
			default:
				return <span style={{color:"rgb(31, 49, 255)"}}>{this.props.value + "" }</span>;
		}
	}

	render() {
		return (<span>{
			this.r()
		}</span>);
	}
}
ValueViewer.propTypes = {};
ValueViewer.defaultProps = {};
export default ValueViewer;
