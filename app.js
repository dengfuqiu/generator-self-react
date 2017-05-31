import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Test from './src/testComp';

class App extends Component {
  render() {
    return (
      <div>
        this is app
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
