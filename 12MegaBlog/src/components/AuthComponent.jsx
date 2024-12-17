import React, { useEffect, useState } from 'react';
import authService from '../appwrite/auth';

const AuthComponent = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await authService.getCurrentUser();
                if (user) {
                    setCurrentUser(user);
                } else {
                    console.log("User is not authenticated.");
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {currentUser ? (
                <div>Welcome, {currentUser.name}!</div>
            ) : (
                <div>Please log in.</div>
            )}
        </div>
    );
};

export default AuthComponent;