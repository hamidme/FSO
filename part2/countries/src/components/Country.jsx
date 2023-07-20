import Weather from "./Weather";

const Country = ({ countryList, userInput }) => {
  return (
    <div>
      {userInput !== "" &&
        countryList
          .filter((name) => name.name.common.toLowerCase().includes(userInput))
          .map((country, index) => {
            return (
              <div key={index}>
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
                <img
                  src={country.flags.png}
                  alt={`flag of ${country.name.common}`}
                />
                <Weather city={country.capital} />
              </div>
            );
          })}
    </div>
  );
};

export default Country;
