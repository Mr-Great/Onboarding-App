import { FC, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import UserInterface from '../interfaces/user';
import TaskInterface from '../interfaces/task';
import { getAllUsers } from '../modules/Users';
import { getUserTasks } from '../modules/TasksList';

export interface HomeInterface {}

const HomePage: FC<HomeInterface> = (props) => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const currentUser = useRef<HTMLDivElement>(null);

  const changeToSelected = (index: number) => {
    if (null !== currentUser) {
      console.log(currentUser);
      // currentUser.current.style.backgroundColor = '#fce8e6';
    }
  };

  const getInitialState = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async (id: number) => {
    try {
      const data = await getUserTasks(id);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialState();
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box sx={{ bgcolor: '#eeeeee', p: '20px' }}>
          <Typography variant='h4' align='center'>
            Onboarding tracker
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box>
                <Typography variant='h6'>Users</Typography>
                {users.map((user, index) => {
                  return (
                    <Paper
                      elevation={2}
                      key={index}
                      ref={currentUser}
                      sx={{
                        m: '5px',
                        p: '10px',
                        display: 'flex',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        changeToSelected(index);
                        getTasks(user.id);
                      }}
                    >
                      <Typography sx={{ lineHeight: 2 }}>
                        {user.username}
                      </Typography>
                      <Button
                        variant='text'
                        size='small'
                        color='inherit'
                        sx={{ marginLeft: 'auto' }}
                      >
                        {'>>'}
                      </Button>
                    </Paper>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant='h6'>Task List</Typography>
                <FormGroup>
                  {tasks.map((task, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={task.completed}
                            disabled={task.completed}
                          />
                        }
                        label={task.title}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;