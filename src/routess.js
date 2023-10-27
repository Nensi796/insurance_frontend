import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Programs from './pages/Programs/programs';

const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/programs" element={<Programs />} />
        </Routes>
    );
};

export default Routess;
