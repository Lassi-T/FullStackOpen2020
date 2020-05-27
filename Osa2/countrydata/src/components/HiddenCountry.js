import React, { useState } from 'react'
import Country from './Country'

const HiddenCountry = ({ country }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        {country.name} <button onClick={() => setOpen(!open)}>Show</button>
      </div>
      {open && <Country country={country} />}
    </>
  )
}

export default HiddenCountry
