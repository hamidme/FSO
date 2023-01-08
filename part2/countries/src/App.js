import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [countryInfo, setCountryInfo] = useState('')
  const [showCountry, setShowCountry] = useState('')
  const [oneCountryInfo, setOneCountryInfo] = useState('')
  const [countryWeather, setCountryWeather] = useState('')
  
  
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountryInfo(res.data)
    })
  }, [])

  const api_key = process.env.REACT_APP_API_KEY
  
  const city_name = `Saint John's`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`

  useEffect(() => {
    
    axios
    .get(url)
    .then(res => {
      setCountryWeather(res.data)
    })
  }, [])


  const handleFilterCountry = function(event){
    setShowCountry(event.target.value)
  }

  const handleCountry = function(country){
    //setCountryIndex(lat)
    setOneCountryInfo(
      <>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}<br/>
        Area: {country.area}</p>
        <div>
          <h2>Languages:</h2>
          <ul>{Object.values(country.languages).map((language, index) => <li key={index}>{language}</li> )}</ul>
        </div>
        <img alt={country.capital} src={country.flags.png} />
  
          <h2>Weather in {country.capital}</h2>
          <p>Temperature {(countryWeather.main.temp - 273.15).toFixed(2)} Celsius</p>
        
      </>
    )
  
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
              <h3>
                {country.name.common}{'\u00A0'}
                {(showCountry !== '') ? <button onClick={() => handleCountry(country)}>Show</button> : null }
              </h3>              
            </div>) : 
            getCountry && getCountry.map((country,index) => 
            <div key={index}>
              <h3>
                {country.name.common}{'\u00A0'}
                {(showCountry !== '') ? <button onClick={() => handleCountry(country)}>Show</button> : null }
              </h3>              
            </div>)
      }
      <>
      {oneCountryInfo}
      </>
      
    </div>
  );
}

export default App;
