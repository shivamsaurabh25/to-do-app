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
  const [filter, setFilter] = useState("All");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <Auth setUser={setUser} />
      {user && (
        <div className="app">
          <h2>To-Do List</h2>
          <div className="filter-buttons">
            <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
            <button onClick={() => setFilter("Completed")} className={filter === "Completed" ? "active" : ""}>Completed</button>
            <button onClick={() => setFilter("Pending")} className={filter === "Pending" ? "active" : ""}>Pending</button>
          </div>

          <TaskForm addTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      )}
    </div>
  );
};

export default App;