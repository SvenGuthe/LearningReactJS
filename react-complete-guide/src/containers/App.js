import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28, id: 0},
      {name: 'Manu', age: 29, id: 1},
      {name: 'Stephanie', age: 26, id: 2}
    ],
    otherState: 'some other values',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState ({
      showPersons: !doesShow
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
  }

}

export default App;