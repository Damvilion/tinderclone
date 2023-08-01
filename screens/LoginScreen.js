import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const { user } = useAuth();
    return (
        <View>
            <Text>Login Screen</Text>
            <Text>{user}</Text>
        </View>
    );
};

export default LoginScreen;
