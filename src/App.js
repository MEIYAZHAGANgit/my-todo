import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', status: 'Incomplete' });
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (newTask.name.trim() === '' || newTask.description.trim() === '') {
      alert('Task name and description cannot be empty.');
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask({ name: '', description: '', status: 'Incomplete' });
  };

  const editTaskHandler = (index) => {
    setEditTask(index);
    setNewTask(tasks[index]);
  };

  const updateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editTask] = newTask;
    setTasks(updatedTasks);
    setNewTask({ name: '', description: '', status: 'Incomplete' });
    setEditTask(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        ></textarea>
        {editTask !== null ? (
          <button className="update-btn" onClick={updateTask}>
            Update Task
          </button>
        ) : (
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        )}
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div>
              <strong>{task.name}</strong>
              <p>{task.description}</p>
              <span>Status: {task.status}</span>
            </div>
            <div>
              <button className="edit-btn" onClick={() => editTaskHandler(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
