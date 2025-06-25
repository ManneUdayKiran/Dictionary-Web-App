import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import DefinitionCard from './components/DefinitionCard';
import HistoryList from './components/HistoryList'; // ✅ New Component
import axios from 'axios';

const App = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('wordHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const updateHistory = (newWord) => {
    const updated = [newWord, ...history.filter(w => w !== newWord)].slice(0, 10); // Max 10 items
    setHistory(updated);
    localStorage.setItem('wordHistory', JSON.stringify(updated));
  };

  const handleSearch = async (searchTerm) => {
    setWord(searchTerm);
    setLoading(true);
    setNotFound(false);
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      setDefinitions(res.data[0].meanings);
      updateHistory(searchTerm);
    } catch {
      setDefinitions([]);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };
const handleClearHistory = () => {
  localStorage.removeItem('wordHistory');
  setHistory([]);
};

// In JSX:

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Word Wizard 🧙‍♂️
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <HistoryList history={history} onSelect={handleSearch} onClear={handleClearHistory} />

      {/* <HistoryList history={history} onSelect={handleSearch} /> */}
      <Box mt={4}>
        {loading ? (
          <CircularProgress />
        ) : notFound ? (
          <Typography variant="h6" color="error">No definitions found.</Typography>
        ) : (
          definitions.map((meaning, idx) => (
            <DefinitionCard key={idx} meaning={meaning} />
          ))
        )}
      </Box>
    </Container>
  );
};

export default App;
