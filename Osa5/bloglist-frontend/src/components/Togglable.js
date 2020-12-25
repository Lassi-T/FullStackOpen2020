import React, { useState } from 'react'
import ProTypes from 'prop-types'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const togglVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={togglVisibility} id='newBlogButton'>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} >
        {props.children}
        <button onClick={togglVisibility}>Cancel</button>
      </div>
    </div>
  )
}

Togglable.proTypes = {
  buttonLabel: ProTypes.string.isRequired
}

export default Togglable
