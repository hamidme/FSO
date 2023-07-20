import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [countryList, setCountryList] = useState([]);

  //get country lists
  useEffect(() => {
    const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
    axios(url).then((res) => {
      //   console.log(res.data);
      setCountryList(res.data);
    });
  }, []);

  //get user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  //   console.log(countryList);

  return (
    <>
      <Filter handleUserInput={handleUserInput} />
      <Countries countryList={countryList} userInput={userInput} />
    </>
  );
};

export default App;
