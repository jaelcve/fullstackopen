import React, { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const titleGiveFeedback = 'give feedback';
  const titleStatistics = 'statisctics';
  const textGood='good';
  const textNeutral='neutral';
  const textBad='bad';
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addStatsValue = (statsOption, statsSet) => {
    statsSet(statsOption + 1);
    console.log('stats', statsOption);
  }

  return (
    <div>
      <Title text={titleGiveFeedback} />
      <Button handleClick={() => addStatsValue(good, setGood)} text={textGood} />
      <Button handleClick={() => addStatsValue(neutral, setNeutral)} text={textNeutral} />
      <Button handleClick={() => addStatsValue(bad, setBad)} text={textBad} />
      <Title text={titleStatistics} />
      <Statistics text={textGood} statsValue={good} />
      <Statistics text={textNeutral} statsValue={neutral} />
      <Statistics text={textBad} statsValue={bad} />
    </div>
  )
}

export default App