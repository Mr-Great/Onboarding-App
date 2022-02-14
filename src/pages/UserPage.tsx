import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
export interface UserInterface {}

const UserPage: FC<UserInterface> = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Box sx={{ bgcolor: '#eeeeee', p: '20px' }}>
          <Typography variant='h6' align='center'>
            <Link to='/'>Home</Link>
          </Typography>
          <Typography sx={{ lineHeight: 2 }}>james Oda</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='task' />
          </FormGroup>
        </Box>
      </Container>
    </>
  );
};

export default UserPage;
