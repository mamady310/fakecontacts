import React, { Component } from 'react';
import CardInfo from '../components/CardInfo';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({contacts: users})
    // console.log(this.state.contacts)
  })
   
  }
  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render() {
    const {contacts, searchfield} = this.state;
    const filteredContacts = contacts.filter(people =>{
      return contacts.name.tolowercase().includes
      (searchfield.toLowerCase());
    })
   
  return (
    <div className="App">
    
       <CardInfo />
      
    </div>
   );
  } 
}

export default App;
