import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const Render = ({ weather }) => {
  return (
    <div>
      <div>
        <strong>temperature:</strong> {weather.current.temperature} Celsius
      </div>
      <img src={weather.current.weather_icons.map((icon) => icon)} alt='Weather icon' />
      <div>
        <strong>wind:</strong> {weather.current.wind_speed} mph {weather.current.wind_dir}
      </div>
    </div>
  )
}

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
      .then((response) => {
        console.log('data got')
        setWeather(response.data)
      })
  }, [country.capital])

  console.log(weather)

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      {weather.length !== 0 && <Render weather={weather} />}
    </div>
  )
}

export default Weather
