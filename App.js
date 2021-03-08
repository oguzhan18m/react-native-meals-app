import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigatorCreated from './navigation/MealsNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo';
import {enableScreens} from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'satisfy' : require('./assets/fonts/Satisfy-Regular.ttf'),
    'didact-gothic': require('./assets/fonts/DidactGothic-Regular.ttf'),
  })
}

export default function App() {
  const [ fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
    />
    )
  }
  return (
    <MealsNavigatorCreated />
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
