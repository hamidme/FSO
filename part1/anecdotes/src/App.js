import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  //button to randomly select an anecdote based on its index
  const ButtonSelectAnecdote = ()=>{
    setSelected(Math.floor(Math.random(1)*anecdotes.length))
  }
  
  //create an array of zeros.
  //number of zero = number of items in the anecdotes list
  const points = Array.from({length:anecdotes.length}, ()=>0)
  
  const [vote, setVote] = useState(points)
  const ButtonClickToVote = ()=>{
    /*
    1. slice away everything before 0 till the number before
       the selected index, and destruct the remaining items
       of the array into the new array.
    2. add 1 to the selected number and include it in the new array
       (it'll replace the selected number).
    3. slice away everything before the selected index + 1, and
        destruct the remaining item of the array into the new array.
    */
   //The updated array (new array) will update the selected item at each
   //click and persists the previously updated item. 
    setVote(oldVote => [
      ...oldVote.slice(0,selected),
      oldVote[selected]+1,
      ...oldVote.slice(selected + 1)
    ])
    //Anecdote with highest vote
  }
  

  //returned values
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <p>has {Math.max(...vote)} votes</p>
      
      <button onClick={ButtonClickToVote}>vote</button>
      <button onClick={ButtonSelectAnecdote}>next anecdotes</button>
    </div>
  )
}

export default App