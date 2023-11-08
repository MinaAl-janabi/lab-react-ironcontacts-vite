/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import contacts from './contacts.json'
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contacts.slice(0, 5));
  const remainingContacts = contacts.slice(5);

  const addRandom = () => {
    if (remainingContacts.length === 0) {
      alert("No more");
    return;
    }}
    const updat= [...contacts, newCont];
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newCont = remainingContacts[randomIndex];





  return (
    <div className="App">
            <button onClick={addRandom}>Add Random Contact</button>

      <h1>Contacts</h1>
      <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
    <th>Won Emmy</th>
          </tr>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar}🏆</td>
              <td>{contact.wonEmmy} 🌟</td>
            </tr>
            
          ))}
      </table>
    </div>
  );
  
          }


export default App;
