import React, { useState, useMemo } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (event) => {
    setCustomTask(event.target.value);
  };

  const handleAddCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters.');
    }
  };

  // Memoize task list to prevent unnecessary re-renders.
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>

      <button onClick={handleAddTask}>Add Todo</button>
      <button onClick={handleIncrement}>Increment Counter</button>

      <div>
        <input
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
          placeholder="Enter custom task"
        />
        <button onClick={handleAddCustomTask}>Submit Custom Task</button>
      </div>

      <UseMemo tasks={memoizedTasks} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default 
