import React from "react";
import Weather from "./Weather";

const CountryOnClick = (country) => {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>
        <strong>Capital:</strong>{" "}
      </p>
      <ul>
        {country.capital !== undefined &&
          Object.values(country.capital).map((capital, index) => (
            <li key={index}>{capital}</li>
          ))}
      </ul>
      <p>
        <strong>Area:</strong> {country.area}
      </p>
      <br />
      <h2>Laguages:</h2>
      <ul>
        {country.languages !== undefined &&
          Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
      </ul>
      <br />
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <Weather city={country.capital} />
    </div>
  );
};
// return <div>CountryOnClick</div>;

export default CountryOnClick;
