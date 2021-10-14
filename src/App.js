import React from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import contactFilter from "./utils/filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmitForm = (contact) => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert("Contact already exists")
      : this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: shortid.generate(), ...contact },
          ],
        }));
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChangeFilter = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <ContactForm onSubmit={this.handleSubmitForm} />
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          onRemove={this.removeContact}
          contacts={contactFilter(this.state.contacts, this.state.filter)}
        />
      </div>
    );
  }
}

export default App;
// import { Component } from "react";
// import Section from "./components/Section";
// import Container from "./components/Container";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";

// import shortid from 'shortid';

// class App extends Component {

//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   }

//   addContact = ({name, number}) => {
//     const newContact = { name: name, number: number, id: shortid.generate() };
//     this.setState(prevState => ({
//       contacts : [newContact, ...prevState.contacts],
//     }));
//     // console.log(this.contacts);
//   }

//   changeFilter = e => {
//     this.setState({filter: e.currentTarget.value});
//   }

//   render() {

//     const visibleContact = this.state.contacts.filter(contacts => contacts.name.includes(this.state.filter));

//     return (
//       <Section>
//       <Container>
//           <ContactForm onSubmit={this.addContact} />
//       </Container>
//       <Container>
//           <Filter value={this.state.filter} onChange={this.changeFilter}/>
//       </Container>
//       <Container>
//       <ContactList contacts={this.state.contacts}/>
//       </Container>
//       </Section>
//     )
//   }
// }

// export default App;
