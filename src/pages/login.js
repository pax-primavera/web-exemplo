import React, { useState } from 'react';
import LoginCard from '../components/LoginCard';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatCPF } from '../utils/formatCPF';
import './login.css';
import { getLoginData } from '../services/get/login';
import { login } from '../services/post/login';


export default function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleCpfChange = (e) => {
        setCpf(formatCPF(e.target.value));
    };

    //função para chamada da api login do tipo post
    const handleLogin = async () => {
        if (cpf == '') {
            toast.warning('Preenha o CPF!');
            return;
        }
        if (password == '') {
            toast.warning('Preenha a senha!');
            return;
        }
        try {
            const data = await login(cpf, password);
            if (data) {
                toast.success('Login realizado com sucesso!');
            } else {
                toast.warning('Não foi possivel realizar o login!');
            }
        } catch (error) {
            toast.error('Falha no login. Verifique suas credenciais.');
        }
    };

    //função para chamada da api get
    const fetchData = async () => {
        const loginData = await getLoginData();
        console.log(loginData);
    };

    return (
        <div className="login-container">
            <LoginCard>
                <Logo />
                <TextInput
                    label="CPF"
                    value={cpf}
                    maxLength={14}
                    onChange={handleCpfChange}
                />
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton onClick={() => handleLogin()} />
            </LoginCard>
        </div>
    );
}
