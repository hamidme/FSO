import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const url = "https://studies.cs.helsinki.fi/restcountries/api/all";

const api_key = import.meta.env.VITE_API_KEY;

const Container = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  border: solid 1px #e9e9e9;
  border-radius: 10px;
`;

const InputDiv = styled.div`
  input {
    padding: 10px;
    border-radius: 50px;
    outline: none;
    border: solid #d5d4d4 1px;
    width: 97%;
    background-color: #ffffff;
  }
`;

const CountryNameStyle = styled.div`
  margin-top: 20px;

  p {
    background-color: #ffffff;
    margin: 5px;
    padding: 5px 15px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
  }
  button {
    border-color: transparent;
    color: blue;
    cursor: pointer;
    background-color: #fff;
  }
`;

const SingleCountryStyle = styled.div`
  margin-top: 5px;
`;

const ToggledInfo = styled.div`
  background-color: #00000014;
  padding: 0 10px;
  border-radius: 6px;
`;

export default function App() {
  const [countryList, setCountryList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [toggler, setToggler] = useState({});
  const [show, setShow] = useState("");
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    axios(url).then((res) => {
      setCountryList(res.data);
    });
  }, []);

  useEffect(() => {
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      axios(url).then((res) => {
        console.log(res.data);
        setCity(res.data);
      });
    }
  }, [city]);

  const handleShowButton = (name) => {
    setShow(
      countryList
        .filter((n) => n.name.common === name)
        .map((n) => {
          return (
            <>
              <h1>{n.name.common}</h1>
              <br />
              <p>Capital: {n.capital}</p>
              <p> Area: {n.area}</p>
              <br />
              <h2>Laguages:</h2>
              <ul>
                {n.languages !== undefined &&
                  Object.values(n.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
              </ul>
              <br />
              <img src={n.flags.png} alt="" />
              <h2>Weather in {n.capital}</h2>

              <p>Temperature: {temp}</p>
            </>
          );
        })
    );

    return setToggler({
      ...name,
      [name]: !toggler[name],
    });
  };

  const countryNames = countryList
    .filter((n) => n.name.common.toLowerCase().includes(userInput))
    .map((cname, index) => {
      return (
        <>
          <CountryNameStyle>
            <p key={index}>
              {cname.name.common}&nbsp;
              <button onClick={() => handleShowButton(cname.name.common)}>
                {!toggler[cname.name.common] ? "show" : "hide"}
              </button>
            </p>
            <ToggledInfo>{toggler[cname.name.common] && show}</ToggledInfo>
          </CountryNameStyle>
        </>
      );
    });

  // console.log(countryList);

  const countryInfo = countryList
    .filter((n) => n.name.common.toLowerCase().includes(userInput))
    .map(({ name, area, capital, languages, flags }) => (
      <>
        <SingleCountryStyle>
          <h1>{name.common}</h1>
          <br />
          <p>Capital: {capital}</p>
          <p>Area: {area}</p>
          <br />
          <h2>Laguages:</h2>
          <ul>
            {languages !== undefined &&
              Object.values(languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
          </ul>
          <br />
          <img src={flags.png} alt="" />
        </SingleCountryStyle>
      </>
    ));

  const displayCountryNameList = () => {
    if (userInput !== "" && countryNames.length > 10) {
      return <h3>Too many matches, speciy another filter</h3>;
    } else if (userInput !== "" && countryNames.length > 1) {
      return countryNames;
    } else {
      return userInput && countryInfo;
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <Container>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputDiv>
            <input
              onChange={handleUserInput}
              type="text"
              placeholder="find countries"
            />
          </InputDiv>
        </form>
        {displayCountryNameList()}
      </Container>
    </>
  );
}
