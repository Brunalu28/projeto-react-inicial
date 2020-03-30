import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'World'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Primeiro projeto utilizando react no stackblitz :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
