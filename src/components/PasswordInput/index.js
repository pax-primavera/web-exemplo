import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './password-input.css';

export default function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            fullWidth
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
            inputProps={{ style: { fontFamily: 'Montserrat' } }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff style={{ color: 'var(--verde)' }} /> : <Visibility style={{ color: 'var(--verde)' }} />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}
