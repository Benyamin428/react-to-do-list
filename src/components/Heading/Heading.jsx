import "./Heading.scss";

const Heading = ({reset}) => {
    return (
        <div className="heading">
            <h1 className="heading__title">My Todos</h1>
            <button className="heading__button" onClick={reset}>Reset</button>
        </div>
    );
  }
  
  export default Heading;
  