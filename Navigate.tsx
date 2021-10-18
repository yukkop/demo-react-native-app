import React from 'react';
import Home from './pages/home/Home';
import Music from './pages/music/Music';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleStyle: { fontFamily: 'mta-bolt' }
            }} >
                <Stack.Screen
                    name="Главная"
                    component={Home}
                />
                <Stack.Screen
                    name="Музыка и радио"
                    component={Music}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}