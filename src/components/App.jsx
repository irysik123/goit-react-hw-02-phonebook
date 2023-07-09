import { Component } from 'react';
import contacts from './data/contacts.json';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title } from './App.styled'



class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAdd = newContact => {
    if(this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  }

  onDeleteContact = id => {
    let indexToDelete = this.state.contacts.findIndex(contact => contact.id === id)
    let newContacts = this.state.contacts
    newContacts.splice((indexToDelete), 1)
    this.setState({contacts: [...newContacts]})
  }
 
  render() {
    return (
      <div>
        <Title>Phonebook</Title>
         <ContactForm handleAdd={this.handleAdd}/>

        <Title>Contacts</Title>
        <Filter handleFilterChange={this.handleFilterChange} value={this.state.filter}/>
        <ContactList list={this.state.contacts
            .filter(user =>
              user.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )}
            onDeleteContact={this.onDeleteContact}/>
      </div>
    );
  }
}

export default App;
