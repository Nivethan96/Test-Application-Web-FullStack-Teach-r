// In-built modules
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
/*
    Carousel variables : SLIDER_WIDTH and ITEM_WIDTH
    SLIDER_WIDTH = screen width
    ITEM_WIDTH = SLIDER_WIDTH x 0.5
*/
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5)

// Fonction which defines one Card item with its properties
const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Text style={styles.header}>{item}</Text>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            borderRadius: 8,
            width: ITEM_WIDTH,
            paddingBottom: 40,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        header: {
            color: "#222",
            fontSize: 28,
            textAlign:'center',
            fontWeight: "bold",
            paddingLeft: 20,
            paddingTop: 20
          },
    })

export default CarouselCardItem;