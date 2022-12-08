import React from 'react';
import '../styles/cargos.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AddTaskCargos from '../components/AddTaskCargos';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';


export const Cargos = () => {

    let allTasks = JSON.parse(localStorage.getItem('tasks'));

    const verifyTasks = () => {
        if(allTasks === null){
            return [];
        }else{
            return allTasks;
        }
    }
    
    const [tasks, setTasks] = useState(verifyTasks());

    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleTaskAddition = (taskCod, taskDescription) => {
        const newTasks = [
            ...tasks,{
                codigo: taskCod,
                id: UUIDV4(),
                description: taskDescription,
            },
        ];
        setTasks(newTasks);
        
    }

    
    return (
        <>
            <div className='cargos-container'>
                <h1>Cargos a Mantener</h1>
                <div>
                    <AddTaskCargos handleTaskAddition={handleTaskAddition}/>
                    <NavLink to='home'>Volver</NavLink>
                </div>
                <div className='table-box'>
                    <ul className='table-list'>
                        <li>Codigo</li>
                        <li>Descripcion</li>
                        <li>Editar</li>
                        <li>Eliminar</li>
                    </ul>
                    <Tasks tasks={tasks}/>

                </div>

            </div>
        </>
    )
}
export default Cargos;
