import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes = [] }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(anecdotes.map(() => 0))

  const randomAnecdote = () => {
    let number = selected
    while (number === selected) {
      number = Math.floor(Math.random() * 6)
    }
    setSelected(number)
  }

  const vote = () => {
    setVote(votes.map((item, i) => (i === selected ? item + 1 : item)))
  }

  const getMostVotes = () => {
    let mostVotes = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > votes[mostVotes]) {
        mostVotes = i
      }
    }
    return mostVotes
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br></br>
        Votes {votes[selected]} <br></br>
        <button onClick={vote}>Vote</button>
        <button onClick={randomAnecdote}>Next anecdote</button>
      </p>
      <h2>Anecdote with the most votes</h2>
      {anecdotes[getMostVotes()]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
