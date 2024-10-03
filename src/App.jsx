import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const CONTACTS_DATA = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts-data"));
    if (savedData !== null) {
      return savedData;
    }
    return CONTACTS_DATA;
  });
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddContact = (newContact) => {
    newContact.id = nanoid();
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("contacts-data", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox inputValue={inputValue} onSearch={handleSearch} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
