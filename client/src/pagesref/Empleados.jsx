import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';
import AddTaskEmpleados from '../components/AddTaskEmpleados';

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
            <div className='mt-12'>
                <h1 className='text-center text-2xl uppercase'>Mantener Empleados</h1>
                <div className='flex justify-center ml-7 pt-5'>
                    <div className='flex flex-row'>
                    <p className='text-xl hover:font-semibold mt-0.5'>Agregar</p>
                    <AddTaskEmpleados handleTaskAddition={handleTaskAddition}/>
                    </div>
                    <div className=''>
                    <NavLink to='home'><p className='text-xl hover:font-semibold pr-12'>Volver</p></NavLink>
                    </div>
                    
                </div>
                <div className='rounded-lg border border-sky-100 h-auto w-3/5'>
                    <ul className='w-full p-3.5 flex flex-row border-b border-gray-90 bg-lime-600'>
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