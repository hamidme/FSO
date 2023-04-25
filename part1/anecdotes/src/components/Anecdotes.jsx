
export default function Anecdotes({selected, anecdotes, vote}){
    return (
        <>
            <h1>Anecdotes of the day</h1>
            <p>{selected}</p>
            <p>has {vote[anecdotes.indexOf(selected)]} {vote[anecdotes.indexOf(selected)] < 2 ? 'vote' : 'votes'}</p>
            
        </>
        
    )
}