import Part from "./Part"
import Header from "./Header"

export default function Content({title, parts}){
    let exercises = parts.map((a) => a.exercises)
    let sum = exercises.reduce((a,b) => a+b)
    return (
        <>
            <Header title={title} />
            {parts.map((course) => 
            <Part 
                name={course.name}
                exercise={course.exercises}
                key={course.id}
            />)}
            <Part sum = {<strong> total of {sum} exercises </strong>}/>
        </>
    )
}