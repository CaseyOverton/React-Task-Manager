import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "../App.css"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    marginLeft: 400,
  }
});


const Task = ({ task, onDelete, onToggle }) => {
  useEffect(() => {
    Aos.init({duration: 1000 });
  },[]);
  const classes = useStyles();
  return (
    <div
       className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <div data-aos='fade-up'>
        <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Task
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {task.text}{' '}
          </Typography>
           <Typography variant="body2" component="p">
          <p>{task.day}</p>
          </Typography>
         <HighlightOffIcon className={classes.icon} color='primary'style={{ color: 'red', cursor: 'pointer' }}
          // onClick={() => onDelete(task.id)}/>
          />
        </CardContent>
      </Card>
    </div>
  </div>
  )
}

export default Task
