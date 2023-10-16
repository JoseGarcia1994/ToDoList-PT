import React, { useState } from 'react';
import Message from './Message';

const Form = ({ addTask }) => {

    const [message, setMessage] = useState('');
    const [newTask, SetNewTask] = useState("");
    const [completed, setCompleted] = useState(false)
    const [id, setId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        if (newTask === '') {
            setMessage('Field is mandatory')

            setTimeout(() => {
                setMessage('')
            }, 5000);
            return
        }
        // Add Task
        addTask({ newTask, id, completed })
        reset();
    }

    //reset the form after submiting task
    const reset = () => {
        SetNewTask("")
    }

    return (
        <>
            {message && <Message type='error'>{message}</Message>}
            <div className='input__container'>
                <form onSubmit={e => handleSubmit(e)} className='input__add-task'>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={newTask}
                        onChange={(e) => SetNewTask(e.target.value)}
                    />
                    <button type='submit'><i className='bx bx-chevron-right bx-lg'></i></button>

                </form>
            </div>
        </>
    );
};

export default Form;
