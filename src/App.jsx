import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data)
        setLoading(false)
      })
      .catch(() => {
        setErro('Erro ao carregar tarefas.')
        setLoading(false)
      })
  }, [])

  function handleTaskCreated(novaTarefa) {
    setTasks([...tasks, novaTarefa])
  }

  function handleTaskToggled(tarefaAtualizada) {
    setTasks(tasks.map(task =>
      task.id === tarefaAtualizada.id ? tarefaAtualizada : task
    ))
  }

  function handleTaskDeleted(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>Minha lista de tarefas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />

      {erro && <p className="erro">{erro}</p>}

      {loading ? (
        <p>Carregando tarefas...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onToggle={handleTaskToggled}
          onDelete={handleTaskDeleted}
        />
      )}
    </div>
  )
}

export default App