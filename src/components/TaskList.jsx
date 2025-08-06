import React, { useState } from "react";

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleSave = (index) => {
    if (editText.trim() !== "") {
      editTask(index, editText);
      setEditIndex(null);
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
          {editIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
            />
          ) : (
            <span
              onClick={() => toggleComplete(index)}
              className={`task-text ${task.completed ? "strike" : ""}`}
            >
              {task.text}
            </span>
          )}

          <div className="task-buttons">
            {editIndex === index ? (
              <button onClick={() => handleSave(index)} className="save-btn">Save</button>
            ) : (
              <>
                <button onClick={() => toggleComplete(index)} className="done-btn">
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => handleEdit(index, task.text)} className="edit-btn">✏️</button>
                <button onClick={() => deleteTask(index)} className="delete-btn">❌</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;