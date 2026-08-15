import { useState } from 'react'

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('MEDIUM')

  function handleSubmit(event) {
    event.preventDefault()

    const novaTarefa = {
      title,
      description,
      completed: false,
      priority
    }

    fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaTarefa)
    })
      .then(response => response.json())
      .then(tarefaCriada => {
        onTaskCreated(tarefaCriada)
        setTitle('')
        setDescription('')
        setPriority('MEDIUM')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Título da tarefa"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Descrição"
      />
      <select value={priority} onChange={(event) => setPriority(event.target.value)}>
        <option value="LOW">Baixa</option>
        <option value="MEDIUM">Média</option>
        <option value="HIGH">Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm