import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = props => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistic = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <tr><td width='70'>{text}: </td><td>{value} %</td></tr>
    )
  } 
  return (
    <tr><td width='70'>{text}: </td><td>{value}</td></tr>
  ) 
}

const Statistics = props => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = props.good * 100 / all

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <div><table><tbody>
        <Statistic text = 'good' value = {props.good} />
        <Statistic text = 'neutral' value = {props.neutral} />
        <Statistic text = 'bad' value = {props.bad} />
        <Statistic text = 'all' value = {all} />
        <Statistic text = 'average' value = {average} />
        <Statistic text = 'positive' value = {positive} />
        </tbody></table></div>       
      </div>
    )
  } 
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
