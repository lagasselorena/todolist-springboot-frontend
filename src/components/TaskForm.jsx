import { useState } from 'react'

function TaskForm() {
    const[title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Título dgitado: ', title)        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value ={title}
                onChange={(event)=> setTitle(event.target.value)}
                placeholder="Título da tarefa"
            />
            <button type="submit">Adiciona</button>
        </form>
    )
}

export default TaskForm