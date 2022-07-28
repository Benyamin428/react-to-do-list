import Button from "../Button/Button";

const Taskbar = ({addTask}) => {
    return (
        <form onSubmit={addTask}>
            <input type="text" />
            <Button buttonText="Add" />
        </form>
    );
  }
  
  export default Taskbar;