import Course from './components/Course'
import courses from './components/data'
import Total from './components/Total'



const App = () => {
  
    return(
      courses.map((course, id) => 
        <>
          <Course key={id} header={course.name}/>
            {course.parts.map((content, id) =>
              <Course key={id} content ={content.name}
                exercise ={content.exercises}/>)}

            {<Total key={course.id}
                exercise ={course}/>}   
        </>
        )
    )
}
export default App