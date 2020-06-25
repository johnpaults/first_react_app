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
    return (
      <div className="App">
        <h1>Welcome to my first react app</h1>
        <button onClick= {this.toggleNames}> Toggle Names </button>
        { this.state.showPersons ?
          <div>
            <PersonComponent updatedName={this.updateName} name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <PersonComponent click={this.changePersonState.bind(this, 'and she is a software Engineer')} name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <button onClick={() => this.changePersonState('and he is a Senior Software Engineer')}>Add Profession</button>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
