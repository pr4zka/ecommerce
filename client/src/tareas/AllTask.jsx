import React from 'react'
import Task from '../task/Task'

const Tasks = ({tasks, handleTaskDeletion}) => {
  return (
    <>
    {tasks.map((tasks)=>(
        <Task
        task={tasks}
        key={tasks.id}
        description={tasks.description}
        handleTaskDeletion={handleTaskDeletion}
        />
    ))}
    </>
  );
};

export default Tasks;