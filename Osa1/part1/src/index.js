import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCouter] = useState(0)

  const increaseByOne = () => setCouter(counter + 1)
  const decreaseByOne = () => setCouter(counter - 1)
  const setToZero = () => setCouter(0)

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreaseByOne} text='minus' />
      <Button handleClick={setToZero} text='zero' />
    </div>
  )
}

ReactDOM.render(<App/>, 
  document.getElementById('root'))