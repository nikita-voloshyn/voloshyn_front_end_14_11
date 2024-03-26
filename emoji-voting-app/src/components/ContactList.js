import React from 'react';

class ContactList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td><button onClick={() => this.props.onDeleteContact(contact.id)}>Видалити</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ContactList;
