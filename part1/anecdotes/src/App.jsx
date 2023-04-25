import { useState } from 'react'
import anecdotes from './components/data'
import Anecdotes from './components/Anecdotes'
import Buttons from './components/Buttons'
import AnecWithMostVotes from './components/AnecWithMostVotes'

export default function App() {
  const genRand = () => Math.floor(Math.random()* anecdotes.length)
  let arr = new Uint8Array(anecdotes.length)
  const [selected, setSelected] = useState(anecdotes[genRand()])
  const [vote, setVote] = useState(arr)

  const handleAnecClick = () => setSelected(anecdotes[genRand()])
  const handleVoteClick = () => {
    const copy = [...vote]
    copy[anecdotes.indexOf(selected)]+=1
    setVote(copy)
  }

  let mostVote = Math.max(...vote)
  let mostVoteIndex = vote.indexOf(mostVote)
  let anecdoteWithMostVote = anecdotes[mostVoteIndex]

  return (
    <div>
      <Anecdotes
        selected = {selected}
        vote = {vote}
        anecdotes={anecdotes}
        indexOfSelected = {vote[anecdotes.indexOf(selected)]}
      />
      
      <Buttons onClick={handleVoteClick} value = 'vote'/>
      <Buttons onClick={handleAnecClick} value = 'next anecdote' />
      
      <AnecWithMostVotes
        anecdoteWithMostVote = {anecdoteWithMostVote}
        mostVote= {mostVote}
      /> 
    </div>
  )
}