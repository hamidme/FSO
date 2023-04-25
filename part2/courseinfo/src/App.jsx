import Course from "./components/Course"
import course from './components/data'

const App = () => {
  return (
    <>
    <h1>Web Development Curriculum</h1>
    <Course course={course} />
  </>
  )
}

export default App