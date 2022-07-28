import Task from "../Task/Task";
import { useState } from "react";

const Main = ({tasks}) => {

    const [checked, setChecked] = useState(false);

    const setCheckbox = () => {
        setChecked(!checked);
    }

    const listOfTasks = tasks.map(task => {
        return <Task 
        key={task.id} 
        taskDesc={task.description} 
        checked={checked} 
        setCheckbox={setCheckbox} 
        />
    })

    return (
        <>
            {listOfTasks}
        </>
    );
  }
  
  export default Main;
  