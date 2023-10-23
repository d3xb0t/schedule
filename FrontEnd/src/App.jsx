import './App.css'
import { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import Todo from './components/Todo.jsx'

async function fetchTasks() {
  const response = await fetch('http://localhost:8080/api/v1/todoapp/tasks')
  const tasks = await response.json()
  return tasks
}

async function postTask(_task) {
  const data = {
    "task": _task
  }
  const response = await fetch("http://localhost:8080/api/v1/todoapp/tasks", {
    method: 'post',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify(data)
  }) 

  const reply = await response.json()
  return reply
}

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTask = e => {
    e.preventDefault()
    postTask(input).catch(err => console.log(err))
    setInput('')
  }

  const resetFunction = (id) => {
    setInput(id)
  }

  useEffect(function() {
    fetchTasks().then((fetchedTasks) =>  setTodos(fetchedTasks))
  }, [input])
  return (
      <div className="app">
        <h1>Schedule a Task</h1>
        <form>
            <FormControl>
              <InputLabel>Write a Task</InputLabel>
              <Input value={input} onChange={e => setInput(e.target.value)}/>
            </FormControl>
            <Button type='submit' onClick={addTask} variant='contained' color='primary' disabled={!input}>Add Task</Button>
        </form>
        {todos.map(todo => <Todo key={todo._id} todo={todo} resetFunction={resetFunction}/>)}
      </div>
  )
}

export default App
