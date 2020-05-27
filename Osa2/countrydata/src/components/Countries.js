import React from 'react'
import Country from './Country'
import HiddenCountry from './HiddenCountry'
import Weather from './Weather'

const Countries = ({ countries, filter }) => {
  // Filter the countries
  const countriesToShow = () =>
    countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {countriesToShow().length > 10 
        ? 'Too many matches, specify search.' 
        : countriesToShow().length === 1 
        ? countriesToShow().map((country) => <div> <Country country={country} /> <Weather country={country}/> </div>)
        : countriesToShow().length <= 3
        ? countriesToShow().map((country) => <Country country={country} />)
        : countriesToShow().map((country) => <HiddenCountry country={country} />)}
    </div>
  )
} 

export default Countries
