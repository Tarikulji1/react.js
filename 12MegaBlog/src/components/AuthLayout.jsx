import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);


    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const user = await authService.getCurrentUser();
                if (user) {
                    setCurrentUser(user);
                    if (authentication && !authStatus) {
                        navigate("/");
                    } else if (!authentication && authStatus) {
                        navigate("/login");
                    }
                } else {
                    if (authentication) {
                        navigate('/login');
                    } else {
                        navigate('/');
                    }
                }
            } catch (error) {
                console.error("AuthLayout :: checkAuthStatus :: error", error);
            } finally {
                setLoader(false);
            }
        };
        checkAuthStatus();
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}