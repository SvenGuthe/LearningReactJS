import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other values'
  })

  console.log(personsState);

/*   state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other values'
  } */

  const switchNameHandler = () => {
    /* console.log(this.state); */
    setPersonsState({
      persons: [
        {
          name: 'Maximilian',
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ],
      otherState: personsState.otherState
    });
  }

  // render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App')); */
  // }

}

/* export default App; */
export default app;