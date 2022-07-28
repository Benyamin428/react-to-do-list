import Task from "../Task/Task";

const Main = ({tasks, deleteTask}) => {

    const listOfTasks = tasks.map(task => {
        return <Task 
        key={task.id} 
        taskId={task.id}
        taskDesc={task.description} 
        deleteTask={deleteTask}
        />
    })

    return (
        <>
            {listOfTasks}
        </>
    );
  }
  
  export default Main;
  