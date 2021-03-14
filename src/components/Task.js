import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "../App.css"
import Paper from '@material-ui/core/Paper';
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


const Task = () => {
  return (
    <div class='task'>
      <Paper>
        <p>This is a TEST TASK</p>
        <HighlightOffIcon
        />
      <p>Monday</p>
      </Paper>
    </div>
  )
}

export default Task