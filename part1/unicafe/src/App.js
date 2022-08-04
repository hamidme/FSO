import { useState } from 'react'

const Button = ({onClick, text})=>{
  return(
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value, head, perc})=>{
  return(
    <>
      <h1>{head}</h1>
      <p>{text} {value} {perc}</p>
      
    </>
  )
}

const Statistics = (props) =>{
  if (props.all === 0){
    return (
    <>
      <h1>{props.text}</h1>
      <p>No feedback given</p>
    </>
    )
  }
  return(
    <>
      <StatisticLine head = 'Statistics'/>
      <StatisticLine text = 'Good' value = {props.good}/>
      <StatisticLine text = 'Neutral' value = {props.neutral}/>
      <StatisticLine text = 'Bad' value =  {props.bad} />
      <StatisticLine text = 'All' value = {props.all} />
      <StatisticLine text = "Average" value = {props.average} />
      <StatisticLine text = "Positive" value = {props.positive} perc = '%' />
    </>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const goodClicker = () => {
    setGood(good + 1)
  }

  const [neutral, setNeutral] = useState(0)
  const neutralClicker = () => {
    setNeutral(neutral + 1)
  }

  const [bad, setbad] = useState(0)
  const badClicker = () => {
    setbad(bad + 1)
  }
  

  const all = good + neutral + bad
  const average = (neutral+good+bad)/3
  const positive = (all === 0 ? null : (good/all)*100)
  

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={goodClicker} text='good' />
      <Button onClick={neutralClicker} text = "neutral" />
      <Button onClick={badClicker} text = "bad" />

      <Statistics
      text = 'Statistics'
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {all}
      average = {average}
      positive = {positive}
      />
    </div>
  );
}

export default App;
