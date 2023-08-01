import { View, Text } from 'react-native';
import React, { createContext } from 'react';
import { useContext } from 'react';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider
            value={{
                user: 'Noel',
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
