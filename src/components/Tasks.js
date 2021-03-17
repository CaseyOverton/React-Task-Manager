import '../App.css'
import Task from '../components/Task'
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Aos from 'aos';
import 'aos/dist/aos.css'


const styles = makeStyles((theme) => ({
    root: {
      width: '500px',
      display: 'flex',
      // flexDirection: 'row',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      opacity: 0.5,
      backgroundColor: 'transparent',
    },
  }));

const Tasks = ({ tasks, onDelete, onToggle }) => {
      useEffect(() => {
        Aos.init({duration: 1000 });
      },[]);
  
    const classes = styles();
    return (
        <Paper elevation={3} className={classes.paper} varient='outlined'>
          <div className='wrapper'>
            <div className={classes.root}>
                <div data-aos='fade-up'>
                {tasks.map((task, index) => (
        <Task data-aos='fade-down'key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </div>
           </div>
         </div>
        </Paper>
      )
  }
export default Tasks

