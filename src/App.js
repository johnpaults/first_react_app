import React, { Component } from 'react';
import './App.css';
import PersonComponent from './Person/PersonComponent';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "John", age: "28" },
      { id: 2, name: "Jyoti", age: "25" }
    ],
    showPersons: false
  }

  changePersonState = (profession) => {
    this.setState({
      persons: [
        { name: "John", age: `28 ${profession}` },
        { name: "Jyoti", age: `25 ${profession}` }]
    }
    );
  }

  updateName = (index, event) => {
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    });
  }

  toggleNames = () => {
    let doesName = this.state.showPersons;
    this.setState({showPersons: !doesName});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <PersonComponent deletePerson= {this.deletePersonHandler.bind(this, index)} 
                      name={person.name} age={person.age} 
                      key= {person.key} changed = {(event) => this.updateName(index, event)}/>
            }
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to my first react app</h1>
        <button onClick= {this.toggleNames}> Toggle Names </button>
        { persons }
      </div>
    );
  }
}

export default App;
