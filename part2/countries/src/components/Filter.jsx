import React from "react";

const filter = ({ handleUserInput }) => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="find countries"
          onChange={handleUserInput}
        />
      </form>
    </div>
  );
};

export default filter;
