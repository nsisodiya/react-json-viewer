/**
 * Created by narendrasisodiya on 07/11/15.
 */

import React , {Component} from 'react';
import ReactDOM  from 'react-dom';

class Example extends Component {
	constructor() {
		super();
		this.state = {
			userJson: {}
		};

		this.preSetJSONs = [
			["Apple", "Banana", "Mango"],
			{
				name: "Narendra",
				age: 32,
				place: "Delhi"
			},
			[{
				task: "Write Book",
				done: false
			}, {
				task: "Learn React",
				done: true
			}, {
				task: "Buy Mobile",
				done: false
			}],
			{
				name: "Narendra",
				age: 32,
				place: {
					name: "Delhi",
					pin: "110017"
				},
				likes: ["Apple", "Banana", "Mango"],
				test: {
					undefined: undefined,
					null: null
				},
				todos: [
					{
						task: "Write Book",
						done: false
					}, {
						task: "Learn React",
						done: true
					}, {
						task: "Buy Mobile",
						done: false
					}
				]
			},
			{
				"problems": [{
					"Diabetes": [{
						"medications": [{
							"medicationsClasses": [{
								"className": [{
									"associatedDrug": [{
										"name": "asprin",
										"dose": "",
										"strength": "500 mg"
									}],
									"associatedDrug#2": [{
										"name": "somethingElse",
										"dose": "",
										"strength": "500 mg"
									}]
								}],
								"className2": [{
									"associatedDrug": [{
										"name": "asprin",
										"dose": "",
										"strength": "500 mg"
									}],
									"associatedDrug#2": [{
										"name": "somethingElse",
										"dose": "",
										"strength": "500 mg"
									}]
								}]
							}]
						}],
						"labs": [{
							"missing_field": "missing_value"
						}]
					}],
					"Asthma": [{}]
				}]
			}
		];
	}

	componentDidMount() {
		this.btnClick({
			currentTarget: {
				dataset: {
					jsonId: 2
				}
			}
		})
	}

	btnClick(e) {
		this.refs.textarea.value = JSON.stringify(this.preSetJSONs[e.currentTarget.dataset.jsonId], null, ' ');
		this.setState({
			userJson: this.preSetJSONs[e.currentTarget.dataset.jsonId]
		});
	}

	keyup() {
		try {
			var x = JSON.parse(this.refs.textarea.value);
			this.setState({
				userJson: x
			});
		} catch (ex) {
			this.setState({
				userJson: {
					errorType: "Parse Error",
					error: ex + ""
				}
			});
		}
	}

	render() {

		return <div>
			<h1>React JSON Viewer</h1>
			<a href="https://github.com/nsisodiya/react-json-viewer">https://github.com/nsisodiya/react-json-viewer</a>
			<h2>Try yourself</h2>
			<div style={{margin:10}}>
				<button data-json-id="0" style={{padding:5,marginLeft:10}} onClick={this.btnClick.bind(this)}>Array</button>
				<button data-json-id="1" style={{padding:5,marginLeft:10}} onClick={this.btnClick.bind(this)}>Object</button>
				<button data-json-id="2" style={{padding:5,marginLeft:10}} onClick={this.btnClick.bind(this)}>Array of Object
				</button>
				<button data-json-id="3" style={{padding:5,marginLeft:10}} onClick={this.btnClick.bind(this)}>Nested Object 1
				</button>
				<button data-json-id="4" style={{padding:5,marginLeft:10}} onClick={this.btnClick.bind(this)}>Nested Object 2
				</button>
			</div>
			<textarea style={{
			  fontSize: 15,
        fontFamily: "monospace"
			}} ref="textarea" onKeyUp={this.keyup.bind(this)} placeholder="Copy paste JSON here" name="" id=""
					cols="80" rows="10"></textarea>
			<ReactJSONViewer json={this.state.userJson}></ReactJSONViewer>
		</div>;
	}
}

//export default Example;
module.exports = Example;