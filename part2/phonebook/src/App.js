import styled from '@emotion/styled';
import { Box, colors } from '@mui/material';
import Wrapper from './components/Wrapper';

const StyledBox = styled(Box)({
  backgroundColor: colors.blue[100],
  width:'100%',
  height:'100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

function App() {
  return (
    <StyledBox>
      <Wrapper/>
    </StyledBox>
  );
}

export default App;
