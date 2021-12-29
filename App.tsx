
import React, { useState } from 'react';
import { StyleSheet, Platform, View, StatusBar, Button } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Navigate from './Navigate';
import BannerAd from "./BannerAd";

const fonts = () => Font.loadAsync({
  'mt-bolt': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-reg': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mta-bolt': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
  'mta-exbolt': require('./assets/fonts/MontserratAlternates-ExtraBold.ttf'),
  'mta-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf')
})

export default function App() {
  const [showBanner, setShowBanner] = useState(false);
  const [font, setFont] = useState(false);



  if (font) {
    return (
      [
        <Navigate />,
        <View style={{ height: 60, backgroundColor: '#fafafa' }}>
          <BannerAd />
        </View>
      ]
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
};