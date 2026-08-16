function TaskItem({ task, onToggle, onDelete }) {

  function handleToggle() {
    const tarefaAtualizada = { ...task, completed: !task.completed }

    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefaAtualizada)
    })
      .then(response => response.json())
      .then(data => onToggle(data))
  }

  function handleDelete() {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta tarefa?')
    if (confirmDelete) {
      fetch(`http://localhost:8080/api/tasks/${task.id}`, {
        method: 'DELETE'
      })
        .then(() => onDelete(task.id))
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <strong style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </strong>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Excluir</button>
    </li>
  )
}

export default TaskItem