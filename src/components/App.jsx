import { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from './data/contacts.json'

class App extends Component {
  state = {
    contacts: [],
    name: [],
  };

  addContact = text => {
    const newContact = {
      id: nanoid(),
      name: text,

    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }))
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: [] });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={nanoid()}
          />
          <button type="submit" onSubmit={this.addContact}>Add contact</button>
        </form>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" /* onClick={onDeleteContact} */>
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
