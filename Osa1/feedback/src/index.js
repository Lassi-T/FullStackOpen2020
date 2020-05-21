import React, {useState} from 'react'
import ReactDom from 'react-dom'

const App = () => {

  const [feedback, setFeedback] = useState({
    Good: 0, Neutral: 0, Bad: 0
  })

  /*
  const handleFeedback = (newFeedback) => {
    setFeedback({...feedback, newFeedback: feedback.newFeedback + 1})
  }*/

  const handeleGood = () => {
    setFeedback({...feedback, Good: feedback.Good + 1})
  }

  const handleNeutral = () => {
    setFeedback({...feedback, Neutral: feedback.Neutral + 1})
  }

  const handleBad = () => {
    setFeedback({...feedback, Bad: feedback.Bad + 1})
  }

  return (
    <div>
      <h1>{'Give Feedback'}</h1>
        <button onClick={handeleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      <h2>{'Statistics:'}</h2>
        <p>
          {'Good: '} {feedback.Good} <br></br>
          {'Neutral: '} {feedback.Neutral} <br></br>
          {'Bad: '} {feedback.Bad}
        </p>
    </div>
  )
}

ReactDom.render(<App />,
   document.getElementById('root'))