import React from 'react';
import { TextField } from '@mui/material';
import './text-input.css';

export default function TextInput({ label, value, onChange, maxLength, ...props }) {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            variant="outlined"
            margin="normal"
            className="text-input"
            InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
            inputProps={{ maxLength, style: { fontFamily: 'Montserrat' } }}
            {...props}
        />
    );
}
