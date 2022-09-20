import { useState } from 'react';

const useSongInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

export default useSongInput;