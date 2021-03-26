import React, { useState } from 'react'
import Button from './Button'
import Vote from './Vote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({});

  const setToSelected = (selected) => {
    const generateRamdonNumber = () => Math.floor((Math.random() * anecdotes.length - 1) + 1);
    const tempSelected = selected;
    do {
      selected = generateRamdonNumber();
    } while (tempSelected === selected);
    setSelected(selected);
  }

  const setToVote = (vote, selected) => {
    const copyVote = { ...vote }
    if (copyVote[selected] === undefined) copyVote[selected] = 0;
    copyVote[selected] += 1;
    setVote(copyVote);
  }

  const mostVotes = (vote) => {
    if (Object.keys(vote).length) {
      let tempValue = 0;
      let selectedKey;
      for (let key in vote) {
        if (vote[key] > tempValue) {
            selectedKey = key;
            tempValue = vote[key];
        }
      }
      return (
        <div>
          {anecdotes[selectedKey]}
          <Vote vote={vote[selectedKey]} />
        </div>
      )

    } else {
      return <div>No votes yet</div>
    }
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Vote vote={vote[selected]} />
      <br />
      <Button handleClick={() => setToVote(vote, selected)} text='vote' />
      <Button handleClick={() => setToSelected(selected)} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {mostVotes(vote)}
    </div>
  )
}

export default App