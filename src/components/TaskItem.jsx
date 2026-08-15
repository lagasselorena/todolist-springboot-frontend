function TaskItem({ task }) {
  return (
    <li>
      <strong>{task.title}</strong>
      <p>{task.description}</p>
    </li>
  )
}

export default TaskItem