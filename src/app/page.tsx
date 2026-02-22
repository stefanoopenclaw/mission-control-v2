'use client';
import { useState, useEffect } from 'react';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    // Fetch initial tasks from API
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data.tasks));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Mission Control Dashboard</h1>
      <Dashboard tasks={tasks} onAddTask={(newTask) => setTasks([...tasks, newTask])} />
      {/* OpenClaw Integration Placeholder */}
      <div className="mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold">OpenClaw Tools</h2>
        <button 
          onClick={() => fetch('/api/openclaw', { method: 'POST', body: JSON.stringify({ tool: 'calendar' }) })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Fetch Calendar
        </button>
      </div>
    </main>
  );
}