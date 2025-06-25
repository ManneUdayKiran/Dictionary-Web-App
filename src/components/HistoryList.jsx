import React from 'react';
import { Typography, Chip, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionChip = motion(Chip);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const HistoryList = ({ history, onSelect, onClear }) => {
  if (history.length === 0) return null;

  const handleKeyDown = (e, word) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(word);
    }
  };

  return (
    <Box mt={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">🔁 Recent Searches</Typography>
        <Button onClick={onClear} size="small" color="error" variant="text">
          Clear
        </Button>
      </Box>

      <MotionBox
        display="flex"
        flexWrap="wrap"
        gap={1}
        mt={1}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {history.map((word, idx) => (
          <MotionChip
            key={idx}
            label={word}
            clickable
            tabIndex={0}
            onClick={() => onSelect(word)}
            onKeyDown={(e) => handleKeyDown(e, word)}
            color="primary"
            variant="outlined"
            variants={chipVariants}
            whileTap={{ scale: 0.9 }}
            sx={{
              '&:focus-visible': {
                outline: '2px solid #1976d2',
                outlineOffset: '2px'
              }
            }}
          />
        ))}
      </MotionBox>
    </Box>
  );
};

export default HistoryList;
