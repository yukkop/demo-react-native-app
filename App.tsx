import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home/Home';
import { gStyle } from './styles/style';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const fonts = () => Font.loadAsync({
  'mt-bolt': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-reg': require('./assets/fonts/Montserrat-Regular.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
