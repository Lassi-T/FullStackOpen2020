import React, { useState } from 'react'
import ReactDom from 'react-dom'

const Statistics = (props) => {
  if (props.all > 0) {
    let avarage = props.good - props.bad
    return (
      <div>
        <p>
          {'Good: '} {props.good} <br></br>
          {'Neutral: '} {props.neutral} <br></br>
          {'Bad: '} {props.bad} <br></br>
          {'Total: '} {props.all} <br></br>
          {'Avarage: '} {avarage / props.all} <br></br>
          {'Positive: '} {Math.round((props.good / props.all) * 100).toFixed(2)} {'%'}
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <p>{'No feedback given'}</p>
      </div>
    )
  }
}

const App = () => {
  const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
    All: 0,
  })

  const handleGood = () => {
    setFeedback({
      ...feedback,
      Good: feedback.Good + 1,
      All: feedback.All + 1,
    })
  }

  const handleNeutral = () => {
    setFeedback({
      ...feedback,
      Neutral: feedback.Neutral + 1,
      All: feedback.All + 1,
    })
  }

  const handleBad = () => {
    setFeedback({
      ...feedback,
      Bad: feedback.Bad + 1,
      All: feedback.All + 1,
    })
  }

  return (
    <div>
      <h1>{'Give Feedback'}</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h2>{'Statistics:'}</h2>
      <p>
        <Statistics
          all={feedback.All}
          good={feedback.Good}
          neutral={feedback.Neutral}
          bad={feedback.Bad}
        />
      </p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
