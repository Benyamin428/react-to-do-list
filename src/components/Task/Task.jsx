import "./Task.scss";

const Task = ({taskDesc, checked, setCheckbox}) => {
    return (
        <>
            <input type="checkbox" id="task" onChange={setCheckbox} />
            <label className={checked?"checked":"unchecked"}htmlFor="task"> {taskDesc}</label>
        </>
    );
  }
  
  export default Task;
  