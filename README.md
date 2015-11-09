# react-json-viewer
React Component for View JSON in beautiful tabular format. See images below.
Note: Images are little old. From version 1.0.7, we show colors too.

[![npm version](https://badge.fury.io/js/react-json-viewer.svg)](https://badge.fury.io/js/react-json-viewer)

# Demo

[http://nsisodiya.github.io/react-json-viewer](http://nsisodiya.github.io/react-json-viewer/)

# What

![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic2.png)

# Install

[![react-json-viewer](https://nodei.co/npm/react-json-viewer.png?downloads=true)](https://npmjs.org/package/react-json-viewer)

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

# JSFiddle Example

[http://jsfiddle.net/nsisodiya/61fwqcg5/](http://jsfiddle.net/nsisodiya/61fwqcg5/)
