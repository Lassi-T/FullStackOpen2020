import React from 'react'
import Country from './Country'

const Countries = ({ countries, filter }) => {
  // Filter the countries
  const countriesToShow = () =>
    countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {countriesToShow().length > 10 
        ? 'Too many matches, specify search.' 
        : countriesToShow().length <= 3 
        ? countriesToShow().map((country) => <Country key={country.alpha3Code} country={country} />)
        : countriesToShow().map((country) => <div>{country.name}</div>)}
    </div>
  )
}

export default Countries
