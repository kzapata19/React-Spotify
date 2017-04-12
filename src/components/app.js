import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        counter: 1,
        value: '',
      }
  }

textEntered = (event) => {
  this.setState({ value: event.target.value });
};

  render() {
    return (
      <div>
        {this.state.value}
        <Button name={'Add 1'} clicked={() => this.setState({ counter: this.state.counter + 1 })} />
        <input type="text" value={this.state.value} onChange={this.textEntered} />
      </div>
    );
  }
}
