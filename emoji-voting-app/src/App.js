import React, { Component } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    showForm: false
  };

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }))
      .catch(error => console.error('Error fetching contacts:', error));
  };

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };

  handleAddContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      showForm: false
    }));
  };

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactList contacts={this.state.contacts} onDeleteContact={this.handleDeleteContact} />
        <button onClick={this.toggleForm}>Add Contact</button>
        {this.state.showForm && <ContactForm onAddContact={this.handleAddContact} />}
      </div>
    );
  }
}

export default App;
