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
      {head}
      {text} {value} {perc}
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
      <table>
        <thead>
          <tr>
            <td><h1><StatisticLine head = 'Statistics'/></h1></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><StatisticLine text = 'Good'/></td>
            <td><StatisticLine value = {props.good}/></td>
          </tr>
          <tr>
           <td><StatisticLine text = 'Neutral'/></td>
           <td><StatisticLine value = {props.neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine text = 'Bad'/></td>
            <td><StatisticLine value = {props.bad}/></td>
          </tr>
          <tr>
           <td><StatisticLine text = 'All'/></td>
           <td><StatisticLine value = {props.all}/></td>
          </tr>
          <tr>
            <td><StatisticLine text = 'Average'/></td>
            <td><StatisticLine value = {props.average}/></td>
          </tr>
          <tr>
           <td><StatisticLine text = 'Positive'/></td>
           <td><StatisticLine value = {props.positive} perc = '%'/></td>
          </tr>
        </tbody>
      </table>
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
  const average = ((neutral+good+bad)/3).toFixed(2)
  const positive = (all === 0 ? null : ((good/all)*100).toFixed(1))

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
