import React, { useState } from 'react'
import ReactDom from 'react-dom'

const Statistic = (props) => (
  <tr>
    <td> {props.text} </td>
    <td> {props.value} </td>
  </tr>
)

const Statistics = (props) => {
  if (props.all > 0) {
    let avarage = props.good - props.bad
    return (
      <table>
        <tbody>
        <Statistic text={'Good: '} value={props.good} />
        <Statistic text={'Neutral: '} value={props.neutral} />
        <Statistic text={'Bad: '} value={props.bad} />
        <Statistic text={'Total: '} value={props.all} />
        <Statistic text={'Avarage: '} value={avarage / props.all} />
        <Statistic text={'Positive: '} value={Math.round((props.good / props.all) * 100).toFixed(2) + '%'} />
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
        <p>{'No feedback given'}</p>
      </div>
    )
  }
}

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

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
      <Button handleClick={handleGood} text={'Good'} />
      <Button handleClick={handleNeutral} text={'Neutral'} />
      <Button handleClick={handleBad} text={'Bad'} />
      <h2>{'Statistics:'}</h2>
      <Statistics all={feedback.All} good={feedback.Good} neutral={feedback.Neutral} bad={feedback.Bad} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
