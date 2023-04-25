import Content from "./Content"

export default function Course({course}){  
    const allCourses = course.map((course) => 
    <Content 
        key={course.id}
        title = {course.name}
        parts = {course.parts}
    />)
    return (
        <>
            {allCourses}
        </>
    )
}