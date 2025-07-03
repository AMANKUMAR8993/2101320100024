import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { isValidURL } from '../utils/validators';
import { logger } from '../utils/logger';

const URLForm = ({ onShorten }) => {
  const [inputs, setInputs] = useState([{ longUrl: '', shortcode: '', validity: '' }]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addRow = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { longUrl: '', shortcode: '', validity: '' }]);
    }
  };

  const handleSubmit = () => {
    const valid = inputs.every(({ longUrl }) => isValidURL(longUrl));
    if (!valid) {
      logger("Invalid URL detected", inputs);
      alert('Please enter valid URLs');
      return;
    }
    logger("URLs submitted for shortening", inputs);
    onShorten(inputs);
  };

  return (
    <div>
      {inputs.map((input, idx) => (
        <Grid container spacing={2} key={idx} sx={{ mb: 1 }}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Long URL"
              value={input.longUrl}
              onChange={(e) => handleChange(idx, 'longUrl', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Shortcode (optional)"
              value={input.shortcode}
              onChange={(e) => handleChange(idx, 'shortcode', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Validity (min)"
              value={input.validity}
              onChange={(e) => handleChange(idx, 'validity', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Button onClick={addRow} disabled={inputs.length >= 5}>Add Row</Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>Shorten</Button>
    </div>
  );
};

export default URLForm;
