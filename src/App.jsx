import './App.css';
import { useState, useEffect } from 'react';
import {generateId} from './helpers';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([
    ...(JSON.parse(localStorage.getItem("tasks")) ?? [])
  ]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks) ?? [])
  }, [tasks])

  const addTask = (task) => {
    if (task.id) {
      // Update task
    } else {
      // Add new Task
      task.id = generateId();
      setTasks([...tasks, task])
    }
  }

  // Update task to completed
  const taskToCompleted = (id) => {
    const updatedTask = tasks.map( task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updatedTask);
  }

  // Delete task
  const deleteTask = id => {
    const updatedTask = tasks.filter( task => task.id !== id)
    setTasks(updatedTask);
  }

  return (
    <div className='app'>
      <h1 className='title'>My Tasks</h1>
      <Form 
      addTask={addTask}
      />

      <TaskList 
      tasks={tasks}
      taskToCompleted={taskToCompleted}
      deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
