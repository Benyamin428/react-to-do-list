import Button from "../Button/Button";
import Taskbar from "../Taskbar/Taskbar";
import "./Heading.scss";

const Heading = () => {
    return (
        <div className="heading">
            <h1>My Todos</h1>
            <Button buttonText="Reset" />
        </div>
    );
  }
  
  export default Heading;
  