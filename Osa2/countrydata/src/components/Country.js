import React from 'react'

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={(country.population += 1)}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} width='200' height='100' alt='a flag' />
    </div>
  )
}

export default Country
