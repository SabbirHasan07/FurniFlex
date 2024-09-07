import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('demo-e-commerce-logged-in-user');
        localStorage.removeItem('demo-e-commerce-cart');
    };

    const setLoggedInUser = (data) => {
        localStorage.setItem('demo-e-commerce-logged-in-user', JSON.stringify(data));
        setUser(data);
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('demo-e-commerce-logged-in-user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setUser(user);
            } catch (error) {
                console.error("Error parsing stored user data:", error);
            }
        } else {
            setUser({});
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setLoggedInUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
