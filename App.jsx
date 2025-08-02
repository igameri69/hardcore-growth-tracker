import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔥 Hardcore Growth Tracker</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter today's growth task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            onClick={() => toggleTask(idx)}
            style={{
              cursor: 'pointer',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}