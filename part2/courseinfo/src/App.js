import Typography from '@mui/material/Typography'
import Data from './components/Data'
import Course from './components/Course'
import { Box } from '@mui/system';

function App() {
  return (
    <Box sx={{margin:'20px auto', width:'80%'}}>
      <Typography variant="h3"
      sx={
          {
            color:"white", 
            backgroundColor:'orange',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '5px'

          }
        }
      >
        Web Development Curriculum
      </Typography>
      {Data.map((course)=>
        <Course 
            key={course.id}
            header={course.name}
            parts = {course.parts}
        />
        )
      }
    </Box>
  );
}

export default App;
