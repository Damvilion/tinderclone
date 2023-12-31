import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

const StackNavigator = () => {
    const { user } = useAuth();
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Chat' op component={ChatScreen} />
                </>
            ) : (
                <Stack.Screen name='Login' component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
