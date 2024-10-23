import React from 'react';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';
import './login-card.css';

export default function LoginCard({ children }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="login-card">
            <Card className="card">
                {children}
            </Card>
        </motion.div>
    );
}
