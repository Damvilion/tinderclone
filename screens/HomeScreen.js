import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>NEW</Text>
            <Button title='Home' onPress={() => navigation.navigate('Chat')} />
        </View>
    );
};

export default HomeScreen;
