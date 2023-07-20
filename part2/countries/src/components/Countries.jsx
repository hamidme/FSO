import React, { useState } from "react";
import Country from "./Country";
import showInfoOnClick from "./CountryOnClick";

const Countries = ({ countryList, userInput }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  const handleSingleDisplay = (name) => {
    return setButtonClicked({ ...name, [name]: !buttonClicked[name] });
  };

  const listOfCountries = countryList
    .filter((name) => name.name.common.toLowerCase().includes(userInput))
    .map((name, index) => (
      <div key={index}>
        <p>
          {name.name.common}
          <button onClick={() => handleSingleDisplay(name.name.common)}>
            {!buttonClicked[name.name.common] ? "show" : "hide"}
          </button>
        </p>
        {buttonClicked[name.name.common] && showInfoOnClick(name)}
      </div>
    ));

  const displayCountries = () => {
    if (userInput !== "" && listOfCountries.length > 10) {
      return <p>Too many matches, speciy another filter</p>;
    } else if (userInput !== "" && listOfCountries.length > 1) {
      return listOfCountries;
    } else {
      return <Country countryList={countryList} userInput={userInput} />;
    }
  };

  return <div>{displayCountries()}</div>;
};

export default Countries;
