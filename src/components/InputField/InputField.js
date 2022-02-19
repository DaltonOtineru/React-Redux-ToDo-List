import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const InputField = () => {
  const [taskInput, setTaskInput] = useState('');

  const updateInput = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      onChange={updateInput}
      value={taskInput}
    />
  );
};

export default InputField;
