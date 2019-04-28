# react-json-viewer

> React JSON Viewer Component. View JSON in beautiful tabular format.

[![NPM](https://img.shields.io/npm/v/react-json-viewer.svg)](https://www.npmjs.com/package/react-json-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-json-viewer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-json-viewer
[download-image]: https://img.shields.io/npm/dm/react-json-viewer.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-json-viewer

## Install

```bash
npm install --save react-json-viewer
```

[![react-json-viewer](https://nodei.co/npm/react-json-viewer.png?downloads=true)](https://npmjs.org/package/react-json-viewer)

## Usage

```jsx
import React, { Component } from "react";

import JSONViewer from "react-json-viewer";

class Example extends Component {
  render() {
    return (
      <JSONViewer
        json={[
          {
            task: "Learn React",
            done: true,
          },
          {
            task: "Write Book",
            done: false,
          },
        ]}
      />
    );
  }
}
```

# Demo

[http://nsisodiya.github.io/react-json-viewer](http://nsisodiya.github.io/react-json-viewer/)

# JSFiddle Example

[http://jsfiddle.net/nsisodiya/61fwqcg5/](http://jsfiddle.net/nsisodiya/61fwqcg5/)

# What

![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/nsisodiya/react-json-viewer/master/pic2.png)

## License

MIT © [nsisodiya](https://github.com/nsisodiya)
