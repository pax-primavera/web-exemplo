import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

export default RoutesApp;
