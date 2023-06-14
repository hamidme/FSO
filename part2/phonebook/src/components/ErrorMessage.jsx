import React from "react";
import { styled } from "styled-components";

const HideErrorMessage = styled.div`
  padding: 10px;
  background-color: white;
  border: solid 2px #f70606;
  border-radius: 5px;
  color: #f70606;
  display: none;
`;
const FlashErrorMessage = styled(HideErrorMessage)`
  display: block;
`;

const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <>
      {message === "" ? (
        <HideErrorMessage>{`${message}`}</HideErrorMessage>
      ) : (
        <FlashErrorMessage>{`${message}`}</FlashErrorMessage>
      )}
    </>
  );
};

export default ErrorMessage;
