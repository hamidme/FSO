export default function Part({title, name, exercise, sum }){
    return (
        <>  
            <p> <strong>{title}</strong></p>
            <p> {name} {exercise} {sum}</p>
        </>
    )
}