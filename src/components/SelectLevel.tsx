import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Level } from '../types/Resume';

type Props = {
  selectedLevel: keyof typeof Level | '',
  onUpdateLevel(param: string): void
};

export default function BasicSelect({selectedLevel, onUpdateLevel}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onUpdateLevel(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          label="Select level"
          onChange={handleChange}
        >
          <MenuItem value={Level.Junior}>{Level.Junior}</MenuItem>
          <MenuItem value={Level.Middle}>{Level.Middle}</MenuItem>
          <MenuItem value={Level.Senior}>{Level.Senior}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
