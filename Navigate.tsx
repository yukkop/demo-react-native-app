import React from 'react';
import Home from './pages/home/Home';
import Music from './pages/music/Music';
import Movie from './pages/movie/Movie';
import Leisure from './pages/leisure/Leisure';
import Speak from './pages/speak/Speak';
import Phone from './pages/phone/Phone';
import Reminder from './pages/reminder/Reminder';
import Shop from './pages/shop/Shop';
import Taxi from './pages/shop/Taxi';
import CleverHome from './pages/clever home/CleverHome';
import OnOff from './pages/clever home/OnOff';
import Brightness from './pages/clever home/Brightness';
import Color from './pages/clever home/Color';
import Temperature from './pages/clever home/Temperature';
import WorkType from './pages/clever home/WorkType'
import Search from './pages/search/Search';
import DelayCommandExecution from './pages/clever home/DelayCommandExecution';
import FindOutTheStatusOfTheBulb from './pages/clever home/FindOutTheStatusOfTheBulb'
import OnOffTV from './pages/clever home/OnOffTV';
import OperateConditioner from './pages/clever home/OperateConditioner';
import ControlTV from './pages/clever home/ControlTV';
import ManageAddedDevice from './pages/clever home/ManageAddedDevice';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import config from './resources/config.json'
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
                    name={config.home}
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
                <Stack.Screen
                    name={config.shop}
                    component={Shop}
                />
                <Stack.Screen
                    name={config['shop-taxi']}
                    component={Taxi}
                />
                <Stack.Screen
                    name={config['clever-home']}
                    component={CleverHome}
                />
                <Stack.Screen
                    name={config['clever-home-on-off']}
                    component={OnOff}
                />
                <Stack.Screen
                    name={config['clever-home-brightness']}
                    component={Brightness}
                />
                <Stack.Screen
                    name={config['clever-home-color']}
                    component={Color}
                />
                <Stack.Screen
                    name={config['clever-home-color-temperature']}
                    component={Temperature}
                />
                <Stack.Screen
                    name={config['clever-home-work-type']}
                    component={WorkType}
                />
                <Stack.Screen
                    name={config['clever-home-delay-command-execution']}
                    component={DelayCommandExecution}
                />
                <Stack.Screen
                    name={config['clever-home-find-out-the-status-of-the-bulb']}
                    component={FindOutTheStatusOfTheBulb}
                />
                <Stack.Screen
                    name={config['clever-home-on-off-tv']}
                    component={OnOffTV}
                />
                <Stack.Screen
                    name={config['clever-home-operate-conditioner']}
                    component={OperateConditioner}
                />
                <Stack.Screen
                    name={config['clever-home-control-tv']}
                    component={ControlTV}
                />
                <Stack.Screen
                    name={config['clever-home-manage-added-device']}
                    component={ManageAddedDevice}
                />
                <Stack.Screen
                    name={config.search}
                    component={Search}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}