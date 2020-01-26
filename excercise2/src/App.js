import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
  
  state = {
    currentText: ''
  }

  changeTextHandler = (event) => {
    const newText = event.target.value
    this.setState({
      currentText: newText
    })
  }

  deleteCharHandler = (index) => {    
    const currentText = this.state.currentText.split('');
    currentText.splice(index, 1);
    this.setState({
      currentText: currentText.join('')
    })
  }
  
  render() {

    const charArray = this.state.currentText.split('');
    
    const charComponents = charArray.map((char, index) => {
      return <CharComponent click={() => this.deleteCharHandler(index)} key={index} char={char} ></CharComponent>
    })

    return (
      <div>
        <input onChange={this.changeTextHandler} type="text" value={this.state.currentText}></input>
        <ValidationComponent length={this.state.currentText.length}></ValidationComponent>
        <p>Current Text: {this.state.currentText}</p>
        {charComponents}
      </div>
    );
  }
}

export default App;
