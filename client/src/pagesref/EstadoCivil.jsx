import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';
import AddTaskMarcas from '../components/AddTaskMarcas';
import '../styles/estado.css';


const EstadoCivil = () => {

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
            <>
                <div className='estado-civil-container'>
                    <h1 className='title-estado'>Estado Civil Mantener </h1>
                    <div className='buttons-title'>
                        <div className='button-agregar'>
                            <p>Agregar</p>
                            <AddTaskMarcas handleTaskAddition={handleTaskAddition} />
                        </div>
                        <div className='button-volver'>
                            <NavLink to='home'>Volver</NavLink>
                        </div>

                    </div>
                    <div className='table-box-estado'>
                    <ul className='table-list-estado'>
                        <li>Codigo</li>
                        <li>Descripcion</li>
                        <li>Editar</li>
                        <li>Eliminar</li>
                    </ul>
                        <Tasks tasks={tasks} />

                    </div>

                </div>
            </>
        </>
    )
}

export default EstadoCivil