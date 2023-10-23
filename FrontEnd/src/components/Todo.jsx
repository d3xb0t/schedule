import './Todo.css'
import { List, ListItem, ListItemText} from  '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

async function _deleteTask(id) {
    const response = await fetch(`http://localhost:8080/api/v1/todoapp/tasks/${id}`, {
        method: 'delete',
        mode: 'cors'
    })
    return response
}

const Todo = ({ todo, resetFunction }) => {

    const deleteTask = e => {
        e.preventDefault()
        resetFunction(`Eliminada tarea con id no ${todo._id}`)
        _deleteTask(todo._id).catch(err => console.error(err))
    }

    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemText primary={todo.task} secundary={todo._id} />
            </ListItem>
            <DeleteForeverIcon className='erase' onClick={deleteTask} />
        </List>
            
    )
}

export default Todo

