import React from 'react';
import { Button } from '@mui/material';
import './login-button.css';

export default function LoginButton({ onClick }) {
    return (
        <>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
                onClick={onClick}

            >
                Entrar
            </Button><p className="version-text">Versão 1.0.0</p>
        </>
    );
}
