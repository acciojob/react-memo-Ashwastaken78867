import React from 'react';

// React.memo will memoize this component and prevent unnecessary re-renders
const ReactMemo = React.memo(({ counter }) => {
  console.log('Counter component re-rendered');
  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  );
});

export default ReactMemo;
