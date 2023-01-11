import React from 'react'
import { BiTrash } from 'react-icons/bi';


const Task = ({ task }) => {
    

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    return (
        <div className='rounded-lg'>
            <ul className='list-none flex items-center p-4 border-b border-gray-200 rounded-lg'>
                <li>{task.codigo}</li>
                <li>{task.description}</li>
                <li>Editar</li>
                <li><button
                    className="remove-task-btn"
                    onClick={() => {
                        handleTaskDeletion(tasks.id);
                    }}
                >
                   <BiTrash title='Remover'/>
                </button></li>
            </ul>
        </div>
    )
}

export default Task;