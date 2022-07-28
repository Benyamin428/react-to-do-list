import { useState } from "react";

import Heading from "./components/Heading/Heading";
import Taskbar from "./components/Taskbar/Taskbar";
import Main from "./components/Main/Main";

import "./App.scss";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {

    if (event.target[0].value == "") {
      alert("please enter a todo");
      return;
    }

    event.preventDefault();
    setTasks([...tasks, {id: tasks.length, description: event.target[0].value}])

    //reset input field
    event.target[0].value = null;
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id!=id));
  }

  const reset = () => {
    setTasks([]);
  }

  return (
    <div className="container">
      <Heading reset={reset} />
      <Taskbar addTask={addTask} />
      <Main tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
