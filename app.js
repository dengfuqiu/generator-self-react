import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  test(...a) {
    console.log(a);
  }

  render() {
    const a = 1;
    const b = 2;
    const c = 3;
    this.test(a, b, c);
    return (
      <div>
        this is app aaaaa
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
