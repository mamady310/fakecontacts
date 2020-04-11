import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({contacts: users})
    console.log(this.state.contacts)
  })
   
  }

  render() {

  return (
    <div className="App">
   
    </div>
   );
  } 
}

export default App;
