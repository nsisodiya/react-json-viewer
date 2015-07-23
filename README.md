# react-json-viewer
React Component for View JSON in beautiful tabular format. See images below.

# What

# Install

```
npm install react-json-viewer
```
# Use

```
var JSONViewer = require('react-json-viewer');
var todos = [{
 task: "Learn React",
 done: true
},{
 task:"Write Book",
 done: false
}];


<JSONViewer json={todos}></JSONViewer>
```