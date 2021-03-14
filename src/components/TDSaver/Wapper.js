import '../../App.css'
import Task from "../Task"
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Aos from 'aos';
import 'aos/dist/aos.css'



const styles = makeStyles((theme) => ({
    root: {
      width: '300px',
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
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3),
    },
  }));

const Wapper = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[];
  }
    const classes = styles();
    return (
        <Paper elevation={3} className={classes.paper} varient='outlined'>
          <div className='wrapper'>
            <div className={classes.root}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
          </div>
        </Paper>
        
    )
}

export default Wapper
