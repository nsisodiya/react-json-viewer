# react-json-viewer
React Component for View JSON in beautiful tabular format. See images below.

# What

![alt pic](https://raw.githubusercontent.com/hotelsoft/Sheet2AOB/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/hotelsoft/Sheet2AOB/master/pic2.png)

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