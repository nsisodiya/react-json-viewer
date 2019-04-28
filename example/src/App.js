import React, { Component } from 'react';

import JSONViewer from 'react-json-viewer';

export default class App extends Component {
  render() {
    return (
      <div>
        <JSONViewer
          json={[
            {
              task: 'Learn React',
              done: true,
            },
            {
              task: 'Write Book',
              done: false,
            },
          ]}
        />
      </div>
    );
  }
}
