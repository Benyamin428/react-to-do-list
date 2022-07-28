import "./Task.scss";
import { useState } from "react";

const Task = ({taskId, taskDesc, deleteTask}) => {

    const [checked, setChecked] = useState(false);

    const setCheckbox = () => {
        setChecked(!checked);
    }

    return (
        <>
            <input type="checkbox" id="task" onChange={setCheckbox} />
            <label className={checked?"checked":"unchecked"} htmlFor="task"> {taskDesc}</label>
            <button onClick={() => deleteTask(taskId)}>Delete</button>
        </>
    );
  }
  
  export default Task;
  