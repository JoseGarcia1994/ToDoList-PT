import React, { useState } from 'react';
import Task from './Task';
import CompletedTasks from './CompletedTasks';

const TaskList = ({ tasks, taskToCompleted, deleteTask}) => {


    const completeTask = tasks.filter(task => task.completed === true)

    return (
        <>
            <div className='task__container'>
                {tasks.map(task => (
                    <>
                        { task.completed === false ? (
                            <Task
                                key={task.id}
                                task={task}
                                taskToCompleted={taskToCompleted}
                                deleteTask={deleteTask}
                            />
                        ) : null }
                    </>
                ))}
            </div>

            <h2 className='task__completed-title'>Completed</h2>
            
            <div className='task__completed-container'>
                {completeTask.map(task => (
                    <CompletedTasks 
                    key={task.id}
                    task={task}
                    taskToCompleted={taskToCompleted}
                    deleteTask={deleteTask}
                    />
                ))}

            </div>
        </>
    );
};

export default TaskList;