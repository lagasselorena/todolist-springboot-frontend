import TaskItem from './TaskItem'

function pesoDaPrioridade(prioridade) {
  if (prioridade === 'HIGH') return 0
  if (prioridade === 'MEDIUM') return 1
  return 2
}

function TaskList({ tasks, onToggle, onDelete }) {
  const tarefasOrdenadas = [...tasks].sort(
    (a, b) => pesoDaPrioridade(a.priority) - pesoDaPrioridade(b.priority)
  )

  return (
    <ul className="task-list">
      {tarefasOrdenadas.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList