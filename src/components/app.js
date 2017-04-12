import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        textValue: '',
        value: '',
      }
  }

textEntered = (event) => {
  this.setState({ value: event.target.value });
};

changedText = () => {
  this.setState({ textValue: this.state.value });
};

  render() {
    return (
      <div>
        {this.state.textValue}
        <input type="text" value={this.state.value} onChange={this.textEntered} />
        <Button name={'Click Me'} clicked={this.changedText} />
      </div>
    );
  }
}
