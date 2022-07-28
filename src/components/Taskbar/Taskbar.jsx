const Taskbar = ({addTask}) => {
    return (
        <form onSubmit={addTask}>
            <input type="text" />
            <button>Add</button>
        </form>
    );
  }
  
  export default Taskbar;