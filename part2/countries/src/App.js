import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [countryInfo, setCountryInfo] = useState('')
  const [showCountry, setShowCountry] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountryInfo(res.data)
    })
  }, [])

  const handleFilterCountry = function(event){
    setShowCountry(event.target.value)
  }
  
  const getCountry = countryInfo && countryInfo.filter(country => 
    country.name.common.toLowerCase().includes(showCountry.toLowerCase())
    )

  return (
    <div>
      <label>Find Countries</label><br/>
      <input
        onChange={handleFilterCountry}
        value={showCountry}
      />
      {
        (showCountry !== '') && (getCountry.length > 10) ?
          <p>Too many matches, specify another filter</p> :
          getCountry.length > 1 ?
          getCountry && getCountry.map((country,index) => 
            <div key={index}>
              <h3>{country.name.common} {(showCountry !== '')}</h3>
            </div>) : 
          getCountry && getCountry.map((country,index) => 
          <div key={index}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}<br/>
            Area: {country.area}</p>
            <div>
              <h2>Languages:</h2>
              <ul>{Object.values(country.languages).map((language, index) => <li key={index}>{language}</li> )}</ul>
            </div>
            <img alt={country.capital} src={country.flags.png} />
          </div>)
      }
    </div>
  );
}

export default App;
