import React from 'react'
import Button from '../formitems/Button';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GrAddCircle } from 'react-icons/gr';

const AddTaskMercaderias = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [show, setShow] = useState(false);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setInputDesc(e.target.value);
    };

    const handleAdd = (e) => {
        handleTaskAddition(inputData, inputDesc);
        // limpiar inputs
        setInputData('');
        setInputDesc('');
    }

    return (
        <>
            <div className='add-container'>
                <Button onClick={() => {
                    setShow(!show);
                }}><GrAddCircle /></Button>
            </div>
            <div className='modal' style={show ? {
                display: 'flex',
            } : {
                display: 'none',
            }}
                onClick={(e) => (e.target.className === 'modal' ? setShow(false) : {})}
            >
                <div className='input-add-container'>
                    <GrClose
                        onClick={() => {
                            setShow(false);
                        }}
                    />
                    <input type="text"
                        value={inputData}
                        placeholder='Ingrese el Codigo'
                        onChange={handleInputChange} />
                    <textarea
                        value={inputDesc}
                        name="description"
                        cols="30"
                        rows="10"
                        maxLength='250'
                        onChange={handleDescriptionChange}></textarea>
                    <Button onClick={() => {
                        if (inputData !== '') {
                            handleAdd();
                            setShow(false);
                        }
                    }}>Agregar</Button>
                    {/* {
        {handle.map((task) => (
            <Task task={task} key={task.id} />
        ))}
    } */}
                </div>


            </div>
        </>
    )
}

export default AddTaskMercaderias