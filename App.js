import React from 'react';
import {StatusBar, SafeAreaView, View } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Home from './src/Home';


export default function App() {
  
  const [fonteCarregada] = useFonts({
    "MontRegular": Montserrat_400Regular,
    "MontBold": Montserrat_700Bold, 
  })
  
  if (!fonteCarregada){
    return <View/>
  }
  
  return (
    <SafeAreaView>
      <Home/>
      <StatusBar/>
    </SafeAreaView>
  );
}



