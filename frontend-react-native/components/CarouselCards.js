// Modules internes
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Modules externes
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../data/CarouselCardItem';
import ServerData from './ServerData';
import data from '../data/data'

// Fonction à exporter
const CarouselCards = () => {
    const isCarousel = React.useRef(null);
      
    return (
        <View style={styles.container}>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
            />
        </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
})

export default CarouselCards;