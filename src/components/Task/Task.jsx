import "./Task.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const Task = ({taskId, taskDesc, deleteTask}) => {

    const [checked, setChecked] = useState(false);

    const setCheckbox = () => {
        setChecked(!checked);
    }

    return (
        <div className="task">
            <input className="task__checkbox" type="checkbox" id="task" onChange={setCheckbox} />
            <label className={checked?"task__checked":""} htmlFor="task"> {taskDesc}</label>
            <button className="task__button" onClick={() => deleteTask(taskId)}><RiDeleteBin6Line /></button>
        </div>
    );
  }
  
  export default Task;
  