import React, { Component } from 'react';
import './App.css';
import PersonComponent from './Person/PersonComponent';

class App extends Component {
  state = {
    persons: [
      { name: "John", age: "28" },
      { name: "Jyoti", age: "25" }
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

  updateName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: `28` },
        { name: "Jyoti", age: `25` }]
    }
    );
  }

  toggleNames = () => {
    let doesName = this.state.showPersons;
    this.setState({showPersons: !doesName});
  }
  
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(
            person => {
              return <PersonComponent updatedName={this.updateName} 
                      name={person.name} age={person.age} />
            }
          )}
          <button onClick={() => this.changePersonState('and he is a Senior Software Engineer')}>Add Profession</button>
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
