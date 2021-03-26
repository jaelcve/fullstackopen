import React, { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const titleGiveFeedback = 'give feedback';
  const titleStatistics = 'statisctics';
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statsTitle = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
    all: 'all',
    average: 'average',
    positive: 'positive'
  }

  const statsValue = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const addStatsValue = (statsValue, statsSet) => {
    statsSet(statsValue + 1);
  }


  return (
    <div>
      <Title text={titleGiveFeedback} />
      <Button handleClick={() => addStatsValue(good, setGood)} text={statsTitle.good} />
      <Button handleClick={() => addStatsValue(neutral, setNeutral)} text={statsTitle.neutral} />
      <Button handleClick={() => addStatsValue(bad, setBad)} text={statsTitle.bad} />
      <Title text={titleStatistics} />
      <Statistics statsTitle={statsTitle} statsValue={statsValue} />
    </div>
  )
}

export default App