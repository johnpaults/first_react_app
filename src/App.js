import React, { Component } from 'react';
import './App.css';
import PersonComponent from './Person/PersonComponent';

class App extends Component {
  state = {
    persons: [
      {name: "John", age: "28"},
      {name: "Jyoti", age: "25"}
    ]
  }

  changePersonName = () => {
    console.log('This is clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my first react app</h1>
        <PersonComponent name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <PersonComponent name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <button onClick = {this.changePersonName}>Change Name</button>
      </div>
    );
  }
}

export default App;
