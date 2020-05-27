import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
      .then((response) => {
        setWeather(response.data)
      })
  }, [country.capital])

  console.log(weather)

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      {weather.length > 0 && console.log('Nyt')}
    </div>
  )
}

export default Weather
