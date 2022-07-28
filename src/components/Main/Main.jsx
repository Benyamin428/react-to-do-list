import Task from "../Task/Task";

const Main = ({tasks}) => {

    const listOfTasks = tasks.map(task => {
        return <Task key={task.id} taskDesc={task.description} />
    })

    return (
        <>
            {listOfTasks}
        </>
    );
  }
  
  export default Main;
  