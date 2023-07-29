import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
    const navigate = useNavigation();
    return (
        <View>
            <Text>ChatScreen</Text>
            <Button title='Profile' onPress={() => navigate.navigate('Profile')} />
        </View>
    );
};

export default ChatScreen;
