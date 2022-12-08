import React from 'react'
import { BiTrash } from 'react-icons/bi';
import '../styles/cargos.css';

const Task = ({ task }) => {
    

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    return (
        <div className='list-item'>
            <ul className='table-list-item'>
                <li>{task.codigo}</li>
                <li>{task.description}</li>
                <li>Editar</li>
                <li><button
                    className="remove-task-btn"
                    onClick={() => {
                        handleTaskDeletion(task.id);
                    }}
                >
                   <BiTrash title='Remover'/>
                </button></li>
            </ul>
        </div>
    )
}

export default Task;