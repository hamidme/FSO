import React from "react";
import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 10px 0;
  font-size: 1rem;
  padding: 10px;
  border: transparent;
  border-radius: 6px;
`;
const Button = styled.button`
  margin: 10px 0;
  font-size: 1.5rem;
  padding: 8px;
  border: transparent;
  border-radius: 6px;
  cursor: pointer;
  background-color: #606060;
  color: #fff;
`;

const PersonForm = ({
  addNewUser,
  nameInput,
  contactInput,
  setContactInput,
  setNameInput,
}) => {
  return (
    <>
      <Form onSubmit={addNewUser}>
        <Input
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
          type="text"
          id="name"
          placeholder="Type contact's name"
        />

        <Input
          value={contactInput}
          onChange={(e) => {
            setContactInput(e.target.value);
          }}
          type="tel"
          placeholder="Type contact's phone number"
        />
        <Button type="submit">Add</Button>
      </Form>
    </>
  );
};

export default PersonForm;
