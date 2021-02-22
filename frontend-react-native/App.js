import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import CarouselCards from './components/CarouselCards';
import Header from './components/Header';

import DataContainer from './components/Data'

const headerTitle = `Teach'rs favoris`;

export default function App() {

  return (
    <View>
      <Header title={headerTitle} />
      <CarouselCards />
      <DataContainer />
      <StatusBar style="auto" />
    </View>
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
