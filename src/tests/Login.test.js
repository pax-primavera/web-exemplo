import React, { act } from 'react'; // Import act from React
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/login';
import { ToastContainer } from 'react-toastify';

// Mock for the login API
jest.mock('../services/api', () => ({
    login: jest.fn(),
}));

describe('Login Page', () => {
    beforeEach(() => {
        act(() => {
            render(
                <>
                    <ToastContainer />
                    <Login />
                </>
            );
        });
    });

    test('deve renderizar corretamente os campos de CPF, senha e o botão de login', () => {
        // Check if fields are present
        expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    });

    test('deve permitir a digitação do CPF e senha', () => {
        // Simulate typing in the fields
        const cpfInput = screen.getByLabelText(/CPF/i);
        const passwordInput = screen.getByLabelText(/Senha/i);

        fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        // Verify the values were updated correctly
        expect(cpfInput.value).toBe('123.456.789-00');
        expect(passwordInput.value).toBe('password');
    });

    test('deve exibir um erro ao tentar fazer login com credenciais inválidas', async () => {
        // Mock the login function returning an error
        const mockLogin = require('../services/api').login;
        mockLogin.mockRejectedValueOnce(new Error('Login failed'));

        const cpfInput = screen.getByLabelText(/CPF/i);
        const passwordInput = screen.getByLabelText(/Senha/i);
        const loginButton = screen.getByRole('button', { name: /entrar/i });

        fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        // Check if the error message was displayed
        const toastError = await screen.findByText(/Falha no login/i);
        expect(toastError).toBeInTheDocument();
    });

    test('deve fazer login com sucesso', async () => {
        // Mock the login function returning success
        const mockLogin = require('../services/api').login;
        mockLogin.mockResolvedValueOnce({ data: 'Login realizado com sucesso!' });

        const cpfInput = screen.getByLabelText(/CPF/i);
        const passwordInput = screen.getByLabelText(/Senha/i);
        const loginButton = screen.getByRole('button', { name: /entrar/i });

        fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        // Check if the success message was displayed
        const toastSuccess = await screen.findByText(/Login realizado com sucesso!/i);
        expect(toastSuccess).toBeInTheDocument();
    });
});
