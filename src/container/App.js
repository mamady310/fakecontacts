import React, { Component } from 'react';
import CardInfo from '../components/CardInfo';
import Search from '../components/Search';
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
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    })
   
  return (
    <div className="App">
    <h1>Contacts</h1>
       <Search searchChange={this.onSearchChange}/>
       <CardInfo contacts={filteredContacts}/>
      
    </div>
   );
  } 
}

export default App;
