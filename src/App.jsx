import { useState } from "react";

import Heading from "./components/Heading/Heading";
import Taskbar from "./components/Taskbar/Taskbar";
import Main from "./components/Main/Main";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, {id: tasks.length, description: event.target[0].value}])

    //reset input field
    event.target[0].value = null;
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id!=id));
  }

  return (
    <>
      <Heading />
      <Taskbar addTask={addTask} />
      <Main tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
