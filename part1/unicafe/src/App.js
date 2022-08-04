import { useState } from 'react'

const Statistics = (props) =>{
  if (props.all === 0){
    return (
    <>
      <h1>{props.text}</h1>
      <h2>No feedback given</h2>
    </>
    )
  }
  return(
    <>
      <h1>{props.text}</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {props.all}</p>
      <p>Average {props.average}</p>
      <p>Positive {props.positive} %</p>
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

      <button onClick={goodClicker}>good</button>
      <button onClick={neutralClicker}>neutral</button>
      <button onClick={badClicker}>bad</button>

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
