// In-built modules
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Carousel module
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../data/CarouselCardItem';
// Hook which contains backend data
import useData from '../data/ServerData';

// CarouselCards Component to be exported into App
const CarouselCards = () => {
  const isCarousel = React.useRef(null); 
  const [user] = useData()
   
  return (  
    <View style={styles.container}>     
      <Carousel       
        layout="default"       
        ref={isCarousel}       
        data={user.slice(0,10)} // Show the top 10, in this case its the first ten in database      
        renderItem={CarouselCardItem}       
        sliderWidth={SLIDER_WIDTH}   
        itemWidth={ITEM_WIDTH}   
        useScrollView={true}      
      />  
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  }
})

export default CarouselCards;