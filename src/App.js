import React from "react";
import ContactForm from "./components/contact-form/ContactForm";
import ContactList from "./components/contact-list/ContactList";
import Filter from "./components/filter/Filter";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
