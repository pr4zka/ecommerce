import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AddTaskCiudades from '../components/AddTaskCiudades';
import Tasks from '../tareas/AllTask';
import { useEffect } from 'react';
import { v4 as UUIDV4 } from 'uuid';
import '../styles/Ciudades.css';
const Ciudades = () => {

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
    <div className='container-ciudad'>
      <h1 className='title'>Ciudades Mantener</h1>
      <div>
        <AddTaskCiudades handleTaskAddition={handleTaskAddition}/>
        <NavLink to='home'>Volver</NavLink>
      </div>
      <div className='table-box'>
        <ul className='table-list'>
          <li>Codigo</li>
          <li>Descripicon</li>
          <li>Editar</li>
          <li>Eliminar</li>
        </ul>
        <Tasks tasks={tasks}/>
      </div>
    </div>
    </>
  )
}

export default Ciudades;