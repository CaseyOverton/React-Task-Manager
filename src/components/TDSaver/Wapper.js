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

const Wapper = () => {
      useEffect(() => {
        Aos.init({duration: 1000 });
      },[]);
  
    const classes = styles();
    return (
        <Paper elevation={3} className={classes.paper} varient='outlined'>
          <div className='wrapper'>
            <div className={classes.root}>
                <div data-aos='fade-up'>
                  <Task/>
                </div>
                <div data-aos='fade-down'>
                  <Task/>
                </div>
                <div data-aos='fade-left'>
                  <Task/>
                </div>
                <div data-aos='fade-up'>
                  <Task/>
                </div>
                <div data-aos='fade-left'>
                  <Task/>
                </div>
                <div data-aos='fade-right'>
                  <Task/>
                </div>
                <div data-aos='fade-down'>
                  <Task/>
                </div>
                <div data-aos='fade-up'>
                  <Task/>
                </div>
                <div data-aos='fade-left'>
                  <Task/>
                </div>
                <div data-aos='fade-right'>
                  <Task/>
                </div>
                <div data-aos='fade-up'>
                  <Task/>
                </div>
                <div data-aos='fade-left'>
                  <Task/>
                </div>
                <div data-aos='fade-up'>
                  <Task/>
                </div>
                <div data-aos='fade-down'>
                  <Task/>
                </div>
                <div data-aos='fade-left'>
                  <Task/>
                </div>
            </div>
          </div>
        </Paper>
      )
    }

export default Wapper
