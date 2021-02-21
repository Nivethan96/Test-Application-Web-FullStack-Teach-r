import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        height: 200,
        backgroundColor: '#0065cc',
        justifyContent: 'center'
    },
    headerText: {
        marginTop: 50,
        marginLeft: 20,
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
    }
});

export default Header;