import React from 'react';
import Home from './pages/home/Home';
import Music from './pages/music/Music';
import Movie from './pages/movie/Movie';
import Leisure from './pages/leisure/Leisure';
import Speak from './pages/speak/Speak';
import Phone from './pages/phone/Phone';
import Reminder from './pages/reminder/Reminder';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import config from './resources/config.json'
import Header from './components/Header';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleStyle: { fontFamily: 'mta-bolt' },
                headerStyle: {
                    backgroundColor: '#FFE076',
                }
            }} >
                <Stack.Screen
                    name="Главная"
                    component={Home}
                />
                <Stack.Screen
                    name={config.music}
                    component={Music}
                />
                <Stack.Screen
                    name={config.movie}
                    component={Movie}
                />
                <Stack.Screen
                    name={config.leisure}
                    component={Leisure}
                />
                <Stack.Screen
                    name={config.speak}
                    component={Speak}
                />
                <Stack.Screen
                    name={config.phone}
                    component={Phone}
                />
                <Stack.Screen
                    name={config.reminder}
                    component={Reminder}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}