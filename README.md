# react-json-viewer
React Component for View JSON in beautiful tabular format. See images below.

# Demo

[http://nsisodiya.github.io/react-json-viewer](http://nsisodiya.github.io/react-json-viewer/)

# What

![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic2.png)

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

#JSFiddle Example

[http://jsfiddle.net/nsisodiya/61fwqcg5/](http://jsfiddle.net/nsisodiya/61fwqcg5/)
