export default function AnecWithMostVotes({anecdoteWithMostVote, mostVote}){
    return (
        <>
            <h1>Anecdotes with most votes</h1>
            <p>{anecdoteWithMostVote}</p>
            <p>has {mostVote} {mostVote < 2? 'vote' : 'votes'}</p>
        </>
    )
}