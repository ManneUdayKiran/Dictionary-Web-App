import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DefinitionCard = ({ meaning }) => {
  return (
    <Card style={{boxShadow:'0px 2px 4px rgba(0,0,0,0.1)'}} variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {meaning.partOfSpeech}
        </Typography>
        {meaning.definitions.map((def, idx) => (
          <Box key={idx} mb={1}>
            <Typography variant="body1">• {def.definition}</Typography>
            {def.example && (
              <Typography variant="body2" color="text.secondary">Ex: {def.example}</Typography>
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default DefinitionCard;
