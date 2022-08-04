
function Header({course}){
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}


function Part(props){
  //console.log(props)
  return(
    <>
      <p>
        {props.name1} {props.exercises1} <br/>
        {props.name2} {props.exercises2} <br/>
        {props.name3} {props.exercises3} <br/>
      </p>
    </>
  )
}


function Content({parts}){
  return (
    <>
      <Part
        name1 = {parts[0].name}
        exercises1 = {parts[0].exercises}

        name2 = {parts[1].name}
        exercises2 = {parts[1].exercises}
        
        name3 = {parts[2].name}
        exercises3 = {parts[2].exercises}
      />
    </>
  )
}

function Total({parts}){
  
  return(
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <>
      <Header course={course.name}/>
      <Content 
        parts = {course.parts}
      />
      <Total
        parts = {course.parts}
      />
    </>
  );
}

export default App;
