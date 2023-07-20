import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_API_KEY;

const Weather = ({ city }) => {
  console.log(city);
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  useEffect(() => {
    console.log(`effect run, weather in ${city}`);
    if (city) {
      console.log("fetching weather...");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      axios.get(url).then((res) => {
        let data = res.data;
        setTemperature(data.main.temp);
        setWind(data.wind.speed);
      });
    }
  }, [city]);
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>
        <strong>Temperature</strong> {Math.round(temperature - 273.15)} °C
      </p>
      <p>
        <strong>Wind</strong> {wind} m/s
      </p>
    </div>
  );
};

export default Weather;
