import React from "react";
import { styled } from "styled-components";

const HideSuccessMessage = styled.div`
  padding: 10px;
  background-color: white;
  border: solid 2px green;
  border-radius: 5px;
  color: green;
  display: none;
`;

const FlashSuccessMessage = styled(HideSuccessMessage)`
  display: block;
`;

const SuccessMsg = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <>
      {message === "" ? (
        <HideSuccessMessage>{`${message}`}</HideSuccessMessage>
      ) : (
        <FlashSuccessMessage>{`${message}`}</FlashSuccessMessage>
      )}
    </>
  );
};

export default SuccessMsg;
