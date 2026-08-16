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
    const confirmar = window.confirm(`Tem certeza que deseja excluir "${task.title}"?`)

    if (!confirmar) {
      return
    }

    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: 'DELETE'
    })
      .then(() => onDelete(task.id))
  }

  return (
    <li className={`task-item priority-${task.priority}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <div className="task-content">
        <strong className={`task-title ${task.completed ? 'done' : ''}`}>
          {task.title}
        </strong>
        <p className="task-description">{task.description}</p>
      </div>
      <button className="excluir" onClick={handleDelete}>Excluir</button>
    </li>
  )
}

export default TaskItem