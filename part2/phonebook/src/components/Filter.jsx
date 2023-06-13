import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
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

const Filter = ({ query, setQuery }) => {
  return (
    <Container>
      <Input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Filter by name or number"
        type="text"
      />
    </Container>
  );
};

export default Filter;
