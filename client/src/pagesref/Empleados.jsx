import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';
import AddTaskEmpleados from '../components/AddTaskEmpleados';
import '../styles/empleados.css';
const Empleados = () => {

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
            <div className='empleados-container'>
                <h1 className='title-empleados'>Mantener Empleados</h1>
                <div className='buttons-title'>
                    <div className='button-agregar'>
                    <p>Agregar</p>
                    <AddTaskEmpleados handleTaskAddition={handleTaskAddition}/>
                    </div>
                    <div className='button-volver'>
                    <NavLink to='home'>Volver</NavLink>
                    </div>
                    
                </div>
                <div className='table-box-empleados'>
                    <ul className='table-list-empleados'>
                        <li>Nombre</li>
                        <li>Apellido</li>
                        <li>Ci</li>
                        <li>Estado Civil</li>
                        <li>Nacionalidadd</li>
                        <li>Ciudad</li>
                        <li>Estado</li>
                        <li>Editar</li>
                        <li>Eliminar</li>
                    </ul>
                    <Tasks tasks={tasks}/>

                </div>

            </div>
        </>
  )
}

export default Empleados