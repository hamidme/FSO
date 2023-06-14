import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import contactListService from "./services/contactList";
import SuccessMsg from "./components/SuccessMsg";
import ErrorMessage from "./components/Errormessage";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  width: 50%;
  background-color: #e2e2e2;
  padding: 20px;
  border-radius: 6px;
`;

const Header = styled.header`
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  margin: 10px 0;
  font-weight: 400;
`;

const ShowErrorMessage = styled.div`
  padding: 10px;
  background-color: white;
  border: solid 2px #f70606;
  border-radius: 5px;
  color: #f70606;
  /* display: none; */
`;

export default function App() {
  //create an array of contacts (name and phone number)
  const [contactList, setContactList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //collect existing contact lists from API
  useEffect(() => {
    contactListService.getAll().then((existingContact) => {
      setContactList(existingContact);
    });
  }, []);

  //create name input
  const [nameInput, setNameInput] = useState("");

  //create number input
  const [contactInput, setContactInput] = useState("");

  //create search query
  const [query, setQuery] = useState("");

  //adding new user (name and number) to the list
  const addNewUser = (e) => {
    e.preventDefault();

    //create user object that includes name, number, and id
    const newContactObject = {
      name: nameInput,
      number: contactInput,
      id: Math.floor(Math.random() * 100000),
    };

    //check for duplicate name before adding new name to the list
    // by
    //extracting an array of names from the contact list
    const nameOnTheList = contactList.map((contact) =>
      contact.name.toLowerCase()
    );

    // const id = contactList.filter((contact) => contact.);

    //get the name to be added from the new contact object
    const nameToBeAdded = newContactObject.name.toLowerCase();

    //and check if name to be added is already on the list. If not,
    // add the new name if the new name isn't an empty string
    if (nameToBeAdded === "") {
      alert(`Please type a name and contact number`);
    } else if (nameOnTheList.includes(nameToBeAdded)) {
      //if the new contact is already on the list, offer to edit the phone number
      window.confirm(
        `${nameToBeAdded} is already added to phonebook replace the old number with a new one?`
      );

      //find the index of the contact in the list that is the same
      //as the contact to be added and extract its id
      const contactIndex = contactList.findIndex(
        (contact) => contact.name.toLowerCase() === nameToBeAdded
      );
      const id = contactList[contactIndex].id;

      //update the number of the contact on the list based on its id
      contactListService
        .update(id, newContactObject)
        .then((updatedContact) => {
          setContactList(
            contactList.map((old) =>
              old.name === newContactObject.name ? updatedContact : old
            )
          );
        })
        //error message
        .catch((error) => {
          setErrorMessage(
            `Information about ${nameToBeAdded} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });

      setContactInput("");
      setNameInput("");
    } else {
      contactListService
        .create(newContactObject)
        .then((returnedContactList) => {
          setContactList([...contactList, returnedContactList]);

          //success message
          setSuccessMessage(`Successfully added ${returnedContactList.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 2000);
          //clear the input
          setContactInput("");
          setNameInput("");
        });
    }
  };

  return (
    <>
      <Container>
        <Header>Phonebook</Header>
        <SuccessMsg message={successMessage} />
        <ErrorMessage message={errorMessage} />
        <Filter query={query} setQuery={setQuery} />

        <SubHeading>Add A new Contact</SubHeading>
        <PersonForm
          addNewUser={addNewUser}
          nameInput={nameInput}
          setNameInput={setNameInput}
          contactInput={contactInput}
          setContactInput={setContactInput}
        />

        <SubHeading>Contact List</SubHeading>
        <Person
          query={query}
          contactList={contactList}
          setContactList={setContactList}
          contactListService={contactListService}
        />
      </Container>
    </>
  );
}
