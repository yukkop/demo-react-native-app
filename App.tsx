import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Navigate from './Navigate';

const fonts = () => Font.loadAsync({
  'mt-bolt': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-reg': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mta-bolt': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
  'mta-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <Navigate />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}