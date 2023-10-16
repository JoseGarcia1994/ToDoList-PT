
const CompletedTasks = ({ task, taskToCompleted, deleteTask }) => {

    const { newTask, id } = task

    return (
        <div className='task__content'>
            <div className="task__input-p">
                <span className="task__input2" onClick={() => taskToCompleted(id)}></span>
                <p className="task__p2" >{newTask}</p>
            </div>
            <i className='bx bxs-trash' onClick={ () => deleteTask(id) }></i>
        </div>
    );
};

export default CompletedTasks;