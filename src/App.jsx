import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])

  function handleTaskCreated(novaTarefa) {
    setTasks([...tasks, novaTarefa])
  }

  return (
    <div className="app">
      <h1>Minha lista de tarefas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App