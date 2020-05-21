import React, { useState } from 'react'
import ReactDom from 'react-dom'

const Procentage = (props) => {
  if (props.feedback.All > 0) {
    return (
      <div>
        {'Positive: '} {Math.round((props.feedback.Good / props.feedback.All) * 100).toFixed(2)}
        {'%'}
      </div>
    )
  } else {
    return <div>{'Positive: '}</div>
  }
}

const Avarage = (props) => {
  if (props.feedback.All > 0) {
    return (
      <div>
        {'Avarage: '} {props.feedback.Avarage / props.feedback.All}
      </div>
    )
  } else {
    return <div>{'Avarage: '}</div>
  }
}

const App = () => {
  const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
    All: 0,
    Avarage: 0,
  })

  const handeleGood = () => {
    setFeedback({
      ...feedback,
      Good: feedback.Good + 1,
      All: feedback.All + 1,
      Avarage: feedback.Avarage + 1,
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
      Avarage: feedback.Avarage - 1,
    })
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
        {'Bad: '} {feedback.Bad} <br></br>
        {'Total: '} {feedback.All} <br></br>
        <Avarage feedback={feedback} />
        <Procentage feedback={feedback} />
      </p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))