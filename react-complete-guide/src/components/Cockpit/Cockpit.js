import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      setTimeout(() => {
          alert('SavedDataToCloud');
      }, 1000);
      
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    })

    let btnClass = '';
    const assignedClasses = [];

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>OK!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toogle Persons
            </button>
        </div>
    );
}

export default cockpit;