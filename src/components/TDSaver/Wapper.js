import '../../App.css'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Task from "../Task"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

const Wapper = () => {
    const classes = useStyles();
    return (
        <div class='wrapper'>
    <Paper elevation={3}>
        <div className={classes.root}>
                <Task />
                <Task />
                <Task />
                <Task />
        </div>
    </Paper>
    </div>
    )
}

export default Wapper
