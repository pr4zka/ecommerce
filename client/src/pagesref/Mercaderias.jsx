import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';
import AddTaskMercaderias from '../components/AddTaskMercaderias';


const Mercaderias = () => {
    let allTasks = JSON.parse(localStorage.getItem('tasks'));

    const verifyTasks = () => {
        if (allTasks === null) {
            return [];
        } else {
            return allTasks;
        }
    }

    const [tasks, setTasks] = useState(verifyTasks());

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleTaskAddition = (taskCod, taskDescription) => {
        const newTasks = [
            ...tasks, {
                codigo: taskCod,
                id: UUIDV4(),
                description: taskDescription,
            },
        ];
        setTasks(newTasks);

    }

    return (
        <>
            <div className='marcas-container'>
                <h1 className='title-marcas'>Mercaderias Mantener</h1>
                <div className='buttons-title'>
                    <div className='button-agregar'>
                        <p>Agregar</p>
                        <AddTaskMercaderias handleTaskAddition={handleTaskAddition} />
                    </div>
                    <div className='button-volver'>
                        <NavLink to='home'>Volver</NavLink>
                    </div>

                </div>
                <div className='table-box-marcas'>
                    <ul className='table-list-marcas'>
                        <li>Codigo</li>
                        <li>Descripcion</li>
                        <li>Editar</li>
                        <li>Eliminar</li>
                    </ul>
                    <Tasks tasks={tasks} />

                </div>

            </div>
        </>
    )
}

export default Mercaderias