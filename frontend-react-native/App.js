// Buil-in modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

// All imported components
import CarouselCards from './components/CarouselCards';
import Header from './components/Header';
import StatsData from './components/StatsData';

// Variables
const headerTitle = `Teach'rs favoris`;

// Main
export default function App() {
  return (
    <View>
      <Header title={headerTitle} />
      <CarouselCards />
      <StatsData />
      <StatusBar style="auto" />
    </View>
  );
}

