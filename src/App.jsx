import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Auth from "./auth/Auth";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, text: newText } : task))
    );
  };
  

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Auth setUser={setUser} />
      {user && (
        <div className="app">
          <h2>To-Do List</h2>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
        </div>
      )}
    </div>
  );
};

export default App;