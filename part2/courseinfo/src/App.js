import Course from './components/Course'
import courses from './components/data'
import Total from './components/Total'



const App = () => {
  
    return(
      // The most stubborn part :)

      // keys are added but still generating a key-related error!
      courses.map((course, id) => 
        <>
          <Course key={id} header={course.name}/>
            {course.parts.map((content) =>
              <Course key={content.id} content ={content.name}
                exercise ={content.exercises}/>)}

            {<Total key={course.id}
                exercise ={course}/>}   
        </>
        )
    )
}
export default App