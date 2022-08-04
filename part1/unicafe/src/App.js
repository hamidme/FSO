import { useState } from 'react'
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

      <h1>Statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  );
}

export default App;
