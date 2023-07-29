import * as React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </Provider>
    );
}
