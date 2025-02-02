import React, { useMemo } from 'react';

const UseMemo = ({ tasks }) => {
  // useMemo will prevent the list from re-rendering unnecessarily
  const taskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div>
      <h2>Task List</h2>
      <p>Total Tasks: {taskCount}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
