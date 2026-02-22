'use client';
import { useState } from 'react';

interface Props {
  tasks: string[];
  onAddTask: (task: string) => void;
}

export default function Dashboard({ tasks, onAddTask }: Props) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
      // POST to /api/tasks for persistence
      fetch('/api/tasks', { method: 'POST', body: JSON.stringify({ task: newTask }) });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="space-y-2 mb-4">
        {tasks.map((task, i) => (
          <li key={i} className="p-2 bg-gray-50 rounded">{task}</li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Add new task..."
        />
        <button onClick={addTask} className="px-4 py-2 bg-green-500 text-white rounded-r">
          Add
        </button>
      </div>
    </div>
  );
}