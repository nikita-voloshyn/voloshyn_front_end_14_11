import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    username: '',
    phone: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, phone } = this.state;
    const newContact = { name, username, phone };
    this.props.onAddContact(newContact);
    this.setState({
      name: '',
      username: '',
      phone: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Ім'я" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="username" placeholder="Прізвище" value={this.state.username} onChange={this.handleChange} />
        <input type="text" name="phone" placeholder="Телефон" value={this.state.phone} onChange={this.handleChange} />
        <button type="submit">Зберегти</button>
        <button type="button" onClick={this.props.onCancel}>Скасувати</button>
      </form>
    );
  }
}

export default ContactForm;
