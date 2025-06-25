import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex">
      <TextField
        fullWidth
        label="Enter a word"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton type="submit" color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
