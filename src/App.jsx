import { useState, useEffect } from 'react'
import TaskItem from './components/TaskItem'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTasks(data)
      })
  }, [])

  return (
    <div className="app">
      <h1>Minha lista de tarefas</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default App