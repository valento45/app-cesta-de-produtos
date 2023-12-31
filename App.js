import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';

import Cesta from './src/telas/Cesta/index';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />

    </SafeAreaView>
  );
}


