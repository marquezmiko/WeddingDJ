import React, { useState, useEffect } from 'react';

import SongForm from './SongForm.jsx';

function SongList() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('use effect');
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <SongForm />
    </div>
  );
}


export default SongList;