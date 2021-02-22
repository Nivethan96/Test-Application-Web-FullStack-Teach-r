// Modules internes
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Les composants de vue
import CarouselCards from './components/CarouselCards';
import Header from './components/Header';
import ServerData from './components/ServerData';

// Variables
const headerTitle = `Teach'rs favoris`;

// Affichage principale
export default function App() {
  return (
    <View>
      <Header title={headerTitle} />
      <CarouselCards />
      <ServerData />
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
