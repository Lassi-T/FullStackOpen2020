import React from 'react'

const Filter = ({newFilter, onChange}) => {
  return (
    <form>
      <div>
        filter: <input value={newFilter} onChange={onChange} />
      </div>
    </form>
  )
}

export default Filter
