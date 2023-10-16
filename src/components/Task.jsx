
const Task = ({ task, taskToCompleted, deleteTask}) => {

    const { newTask, completed, id } = task

    return (
        <div className='task__content'>
            <div className="task__input-p">
                <span
                    className='task__input'
                    onClick={() => { taskToCompleted(id) }}></span>
                <p className='task__p'>{newTask}</p>
            </div>
            <i className='bx bxs-trash'  onClick={ () => deleteTask(id) }></i>
        </div>
    );
};

export default Task;