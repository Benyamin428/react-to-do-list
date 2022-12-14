import "./Taskbar.scss";
import { IoIosAddCircle } from "react-icons/io";

const Taskbar = ({addTask}) => {
    return (
        <form onSubmit={addTask} className="taskbar">
            <input className="taskbar__input" placeholder="Add your task here..." type="text" />
            <button className="taskbar__button"><IoIosAddCircle /></button>
        </form>
    );
  }
  
  export default Taskbar;