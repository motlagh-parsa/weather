// src/hooks/useAuth.ts
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        const handleAuthChange = () => {
            setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
        };

        window.addEventListener('authStateChanged', handleAuthChange);
        return () => window.removeEventListener('authStateChanged', handleAuthChange);
    }, []);

    const logout = () => {
        localStorage.setItem('isAuthenticated', 'false');
        localStorage.removeItem('username');
        window.dispatchEvent(new Event('authStateChanged'));
        navigate('/login');
    };

    return {isAuthenticated, logout};
};