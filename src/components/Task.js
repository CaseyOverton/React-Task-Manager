import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "../App.css"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



// const Task = ({ task, onDelete, onToggle }) => {
//   return (
//     <div
//       className={`task ${task.reminder ? 'reminder' : ''}`}
//       onDoubleClick={() => onToggle(task.id)}
//     >
//       <h3>
//         {task.text}{' '}
//         <HighlightOffIcon
//           style={{ color: 'red', cursor: 'pointer' }}
//           onClick={() => onDelete(task.id)}
//         />
//       </h3>
//       <p>{task.day}</p>
//     </div>
//   )
// }

// export default Task

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Task = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        TASK 
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        This is the Task 
      </Typography>
      <Typography variant="body2" component="p">
        DATE
      </Typography>
    </CardContent>
  </Card>
   
  )
}

export default Task