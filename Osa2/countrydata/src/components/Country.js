import React from 'react'

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>{country.capital}</div>
      <div>population {country.population}</div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} width='200' height='100' alt="a flag" />
    </div>
  )
}

export default Country
