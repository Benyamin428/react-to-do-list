import "./Heading.scss";

const Heading = ({reset}) => {
    return (
        <div className="heading">
            <h1>My Todos</h1>
            
            <button onClick={reset}>Reset</button>
        </div>
    );
  }
  
  export default Heading;
  