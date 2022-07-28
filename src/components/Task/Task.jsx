import "./Task.scss";
import Button from "../Button/Button";

const Task = ({taskId, taskDesc, checked, setCheckbox, deleteTask}) => {
    return (
        <>
            <input type="checkbox" id="task" onChange={setCheckbox} />
            <label className={checked?"checked":"unchecked"}htmlFor="task"> {taskDesc}</label>
            <button onClick={() => deleteTask(taskId)}>Delete</button>
        </>
    );
  }
  
  export default Task;
  