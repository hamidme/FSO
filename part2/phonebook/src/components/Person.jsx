import axios from "axios";
import React from "react";
import { styled } from "styled-components";

const Contact = styled.div`
  font-size: 18px;
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
`;

const ContactTable = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Person = ({ contactList, setContactList, query, contactListService }) => {
  const handleDeleteButton = (id) => {
    const url = `http://localhost:3000/persons/${id}`;
    const contactToBeDeleted = contactList.find((n) => n.id === id);

    contactListService.remove(id).then((returnedContacts) => {
      if (window.confirm(`Delete ${contactToBeDeleted.name}?`)) {
        setContactList(contactList.filter((contact) => contact.id !== id));
      }
    });
  };

  return (
    <div>
      {contactList
        .filter(
          (username) =>
            username.name.toLowerCase().includes(query) ||
            username.number.includes(query)
        )
        .map(({ name, number, id }) => {
          return (
            <Contact key={id}>
              <ContactTable>
                <div className="name">{name}</div>
                <div className="number">{number}</div>
                <button onClick={() => handleDeleteButton(id)}>delete</button>
              </ContactTable>
            </Contact>
          );
        })}
    </div>
  );
};

export default Person;
